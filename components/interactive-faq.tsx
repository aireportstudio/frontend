"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Is AI Report Studio suitable for all academic disciplines?",
    answer:
      "Yes! AI Report Studio is designed to work across all academic disciplines. We offer specialized templates and formatting options for Engineering, Computer Science, Business, Psychology, Medicine, and many other fields. Our AI understands the unique requirements of different academic domains.",
  },
  {
    question: "How does the AI ensure academic integrity?",
    answer:
      "Our AI is designed to assist with structure, formatting, and suggestions while ensuring all content remains original. We include built-in plagiarism detection, encourage proper citations, and provide tools that help you express your own ideas more clearly rather than generating content for you.",
  },
  {
    question: "Can I collaborate with my supervisor or team members?",
    answer:
      "Our Pro plan includes real-time collaboration features that allow you to share your reports with supervisors, advisors, or team members. They can provide comments, suggestions, and track changes, making the review process seamless and efficient.",
  },
  {
    question: "What citation styles are supported?",
    answer:
      "We support all major citation styles including APA, MLA, Chicago, Harvard, IEEE, Vancouver, and many others. Our system automatically formats your citations and bibliography according to the latest style guidelines, and you can switch between styles with just one click.",
  },
  {
    question: "Is there a limit to the length of reports I can create?",
    answer:
      "No, there are no length restrictions on your reports. Whether you're writing a 10-page research paper or a 200-page thesis, AI Report Studio can handle projects of any size. Our system is optimized for large documents and maintains formatting consistency throughout.",
  },
  {
    question: "Can I export my reports in different formats?",
    answer:
      "Yes! You can export your reports in multiple formats including PDF, Microsoft Word (.docx), LaTeX, and HTML. This ensures compatibility with your university's submission requirements and allows you to continue editing in your preferred software if needed.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive support including 24/7 live chat, email support, video tutorials, and academic guidance from our team of experts. Pro plan users get priority support with faster response times and access to one-on-one consultations for complex projects.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Absolutely. We use enterprise-grade security measures including SSL encryption, secure cloud storage, and regular security audits. Your reports and personal information are never shared with third parties, and you maintain full ownership of your academic work.",
  },
]

export function InteractiveFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <Card key={index} className="card-hover transition-all duration-300 hover:shadow-lg">
          <CardHeader className="cursor-pointer select-none" onClick={() => toggleFAQ(index)}>
            <CardTitle className="text-base sm:text-lg flex items-center justify-between group">
              <span className="group-hover:text-blue-600 transition-colors duration-200">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-gray-400 transition-all duration-300 group-hover:text-blue-600 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </CardTitle>
          </CardHeader>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <CardContent className="pt-0">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.answer}</p>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  )
}
