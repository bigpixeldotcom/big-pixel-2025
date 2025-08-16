'use server'

import { notion } from '@/lib/notion'
import { schema } from '@/lib/schema'
import { APIErrorCode, ClientErrorCode, isNotionClientError } from '@notionhq/client'
import { z } from 'zod'

function shortId() {
  return Math.random().toString(36).slice(2, 8)
}

export async function submitForm(data: z.infer<typeof schema>) {
  const result = schema.safeParse(data)

  if (!result.success) {
    throw new Error('Invalid form data')
  }

  const verifyEndpoint = 'https://www.google.com/recaptcha/api/siteverify'

  const secretKey = process.env.RECAPTCHA_SECRET!

  const response = await fetch(verifyEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      secret: secretKey,
      response: String(result?.data?.captcha ?? ''),
    }),
  })

  const responseJson = await response.json()

  if (!responseJson.success) {
    throw new Error('Invalid reCAPTCHA token')
  }

  try {
    const id = shortId()
    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID! },
      properties: {
        id: { title: [{ text: { content: id } }] },
        submission_date: { date: { start: new Date().toISOString() } },
        name: { rich_text: [{ text: { content: result.data.name } }] },
        email: { email: result.data.email },
        description: { rich_text: [{ text: { content: result.data.description } }] },
        budget: { select: { name: result.data.budget ?? '' } },
        timeline: { select: { name: result.data.timeline ?? '' } },
      },
    })
    return { id }
  } catch (error: unknown) {
    console.error(error)
    if (isNotionClientError(error)) {
      // error is now strongly typed to NotionClientError
      switch (error.code) {
        case ClientErrorCode.RequestTimeout:
          throw new Error('Request timed out')
        case APIErrorCode.ObjectNotFound:
          throw new Error('Object not found')
        case APIErrorCode.Unauthorized:
          throw new Error('Unauthorized')
        default:
          throw new Error('Unknown error')
      }
    }
  }
}
