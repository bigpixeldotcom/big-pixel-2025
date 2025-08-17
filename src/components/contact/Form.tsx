'use client'

import { submitForm } from '@/actions/form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { schema } from '@/lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { CircleCheck, CirclePoundSterling, CircleUserRound, Clock, Mail, Send } from 'lucide-react'
import { useRef, useState } from 'react'
import Captcha from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function ContactForm() {
  const captchaRef = useRef<Captcha>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      description: '',
      budget: '',
      timeline: '',
      captcha: '',
    },
  })

  const { reset } = form

  async function onSubmit(data: z.infer<typeof schema>) {
    setIsSubmitting(true)
    const token = await captchaRef.current?.executeAsync()
    const formData = { ...data, captcha: token ?? '' }
    const result = await submitForm(formData)
    if (result && result.id) {
      setFormSuccess(true)
      reset()
      console.log('Form submitted successfully')
    } else {
      console.error('Form submission failed')
    }
    setIsSubmitting(false)
  }

  return (
    <Card className="mx-auto w-full border border-grey-200 bg-white shadow-lg md:max-w-2xl">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl font-bold">{formSuccess ? 'Thank You!' : 'Start Your Project'}</CardTitle>
        <CardDescription className="text-grey-500">
          {formSuccess
            ? 'We will get back to you within 2 working days'
            : 'Tell us about your design and development needs'}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {formSuccess ? (
          <div className="flex items-center justify-center text-green-50">
            <CircleCheck size={128} strokeWidth={2} />
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <Captcha ref={captchaRef} size="invisible" sitekey={process.env.NEXT_PUBLIC_RECAPTCHA!} />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <CircleUserRound className="h-4 w-4" style={{ color: 'oklch(0.5321 0.2294 328.55)' }} />
                      Your Name
                      <span className="-ml-1 align-super text-red-50">*</span>
                    </FormLabel>
                    <FormDescription className="text-xs text-grey-50">
                      We need to know who you are so we can contact you.
                    </FormDescription>
                    <FormControl>
                      <Input placeholder="Tim Berners-Lee" {...field} />
                    </FormControl>
                    <FormMessage className="text-semibold text-sm text-red-75" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Mail className="h-4 w-4" style={{ color: 'oklch(0.5321 0.2294 328.55)' }} />
                      Email
                      <span className="-ml-1 align-super text-red-50">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="tim@example.com" {...field} />
                    </FormControl>
                    <FormMessage className="text-semibold text-sm text-red-75" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Tell us about your project
                      <span className="-ml-1 align-super text-red-50">*</span>
                    </FormLabel>
                    <FormDescription className="text-xs text-grey-50">Maximum of 1,000 characters</FormDescription>
                    <FormControl>
                      <Textarea
                        rows={6}
                        placeholder="Describe your project goals, requirements, and any specific features you have in mind..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-semibold text-sm text-red-75" />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <CirclePoundSterling className="h-4 w-4" style={{ color: 'oklch(0.5321 0.2294 328.55)' }} />
                        Estimated Budget (optional)
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="transition-all duration-200 focus:border-purple-50 focus:ring-2 focus:ring-purple-50/20">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Under £1000">Under £1,000</SelectItem>
                          <SelectItem value="£1000 - £2500">£1,000 - £2,500</SelectItem>
                          <SelectItem value="£2500 - £5000">£2,500 - £5,000</SelectItem>
                          <SelectItem value="£5000 +">Over £5,000</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Clock className="h-4 w-4" style={{ color: 'oklch(0.5321 0.2294 328.55)' }} />
                        Desired Start Date (optional)
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="transition-all duration-200 focus:border-purple-50 focus:ring-2 focus:ring-purple-50/20">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ASAP">ASAP</SelectItem>
                          <SelectItem value="Within 1 month">Within 1 month</SelectItem>
                          <SelectItem value="2-3 months">2-3 months</SelectItem>
                          <SelectItem value="3-6 months">3-6 months</SelectItem>
                          <SelectItem value="Flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full transform bg-purple-50 py-3 font-medium text-white transition-all duration-200 hover:scale-[1.02] disabled:scale-100"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Submitting your inquiry...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Get in Touch
                  </div>
                )}
              </Button>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  )
}
