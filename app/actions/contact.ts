"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export async function submitContactForm(formData: FormData) {
  try {
    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    // Validate the data
    const validatedData = contactSchema.parse(data);

    // In a real application, you would:
    // - Send email using a service like Resend, SendGrid, etc.
    // - Save to database
    // - Send notifications

    console.log("Contact form submitted:", validatedData);

    return {
      success: true,
      message: `Thank you ${validatedData.name}! Your message has been sent successfully. I'll get back to you soon.`,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check your form data and try again.",
        errors: error.errors.reduce((acc, err) => {
          acc[err.path[0] as string] = err.message;
          return acc;
        }, {} as Record<string, string>),
      };
    }

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
