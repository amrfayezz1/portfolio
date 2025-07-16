"use client";

import { useState, useTransition, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [formState, setFormState] = useState<{
    success: boolean | null;
    message: string;
    errors?: FormErrors;
  }>({
    success: null,
    message: "",
    errors: {},
  });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init("UzDiZVRKfhjMQ946X");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setFormState({ success: null, message: "", errors: {} });
    try {
      await emailjs.sendForm(
        "service_zvzhitg",
        "template_portfolio",
        formRef.current as HTMLFormElement
      );
      setFormState({
        success: true,
        message: "Your message has been sent successfully!",
        errors: {},
      });
      formRef.current?.reset();
    } catch (error) {
      setFormState({
        success: false,
        message: "Failed to send message. Please try again later.",
        errors: {},
      });
    }
    setIsPending(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto"
    >
      <Card className="shadow-2xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Start a Conversation
          </CardTitle>
          <CardDescription className="text-lg">
            Ready to discuss your next project? I'd love to hear from you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="contact-form"
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  disabled={isPending}
                  className={`transition-colors ${
                    formState.errors?.name
                      ? "border-red-500 focus:border-red-500"
                      : "focus:border-blue-500"
                  }`}
                  autoComplete="off"
                />
                <AnimatePresence>
                  {formState.errors?.name && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm text-red-500 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {formState.errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  disabled={isPending}
                  className={`transition-colors ${
                    formState.errors?.email
                      ? "border-red-500 focus:border-red-500"
                      : "focus:border-blue-500"
                  }`}
                  autoComplete="off"
                />
                <AnimatePresence>
                  {formState.errors?.email && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm text-red-500 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {formState.errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-sm font-medium">
                Subject *
              </Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project Discussion / Collaboration Opportunity"
                required
                disabled={isPending}
                className={`transition-colors ${
                  formState.errors?.subject
                    ? "border-red-500 focus:border-red-500"
                    : "focus:border-blue-500"
                }`}
                autoComplete="off"
              />
              <AnimatePresence>
                {formState.errors?.subject && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-sm text-red-500 flex items-center gap-1"
                  >
                    <AlertCircle className="w-3 h-3" />
                    {formState.errors.subject}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Message *
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project, timeline, and how I can help bring your vision to life..."
                rows={5}
                required
                disabled={isPending}
                className={`transition-colors resize-none ${
                  formState.errors?.message
                    ? "border-red-500 focus:border-red-500"
                    : "focus:border-blue-500"
                }`}
                autoComplete="off"
              />
              <AnimatePresence>
                {formState.errors?.message && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-sm text-red-500 flex items-center gap-1"
                  >
                    <AlertCircle className="w-3 h-3" />
                    {formState.errors.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <Button
              id="submitBtn"
              type="submit"
              disabled={isPending}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 text-lg transition-all duration-200 disabled:opacity-50"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>

            {/* Success/Error Messages */}
            <AnimatePresence>
              {formState.message && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`p-4 rounded-lg flex items-start gap-3 ${
                    formState.success
                      ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                      : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                  }`}
                >
                  {formState.success ? (
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  )}
                  <p
                    className={`text-sm ${
                      formState.success
                        ? "text-green-800 dark:text-green-200"
                        : "text-red-800 dark:text-red-200"
                    }`}
                  >
                    {formState.message}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-8 text-center"
      >
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Prefer a direct approach? Reach out to me at:
        </p>
      </motion.div>
    </motion.div>
  );
}
