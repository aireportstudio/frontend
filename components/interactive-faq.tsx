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
    question: "What is AIProjectReport.com?",
    answer:
      "AIProjectReport.com is an AI-powered online tool that helps students generate complete, well-structured project reports automatically. Simply enter your course, department, and project details, and our AI creates a ready-to-download professional report.",
  },
  {
    question: "How does the AI Project Report Generator work?",
    answer:
      "Our system uses advanced artificial intelligence to analyze your project inputs (like project title, course, and objectives) and generate detailed sections such as Introduction, Abstract, Methodology, Results, and Conclusion — all formatted according to academic standards.",
  },
  {
    question: "Who can use AIProjectReport.com?",
    answer:
      "It’s designed for college and university students across all departments — engineering, computer science, management, arts, commerce, and more.",
  },
  {
    question: "Is AIProjectReport.com free to use?",
    answer:
      "You can generate and preview reports for free. Some premium features (like plagiarism check, detailed formatting, or extra export formats) may require an upgrade.",
  },
  {
    question: "What makes AIProjectReport.com different from other report tools?",
    answer:
      "Our platform creates course-specific, department-tailored reports with AI — ensuring the content matches your academic expectations and looks like a professionally written report.",
  },
  {
    question: "Can I generate a report for any course or stream?",
    answer:
      "Yes! Our AI supports reports for all major streams — Engineering, Computer Science, Management, Commerce, Arts, Science, and more.",
  },
  {
    question: "Can I generate reports for BTech, MBA, BBA, or MSc projects?",
    answer:
      "Absolutely. Just select your course type and department, and our AI will adapt the report structure and language accordingly.",
  },
  {
    question: "What if my project topic is unique or uncommon?",
    answer:
      "No problem — our AI analyzes your custom topic and generates original, context-specific content that fits your project title and field of study.",
  },
  {
    question: "Can I edit or customize the report after generation?",
    answer:
      "Yes, you can review, edit, or add your own content before downloading the final version.",
  },
  {
    question: "What formats can I download my report in?",
    answer:
      "You can download reports in PDF, DOCX, or TXT formats for easy submission and printing.",
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
                className={`h-5 w-5 text-gray-400 transition-all duration-300 group-hover:text-blue-600 ${openIndex === index ? "rotate-180" : ""
                  }`}
              />
            </CardTitle>
          </CardHeader>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
