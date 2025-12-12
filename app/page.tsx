"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MobileNav } from "@/components/mobile-nav"
import { InteractiveFAQ } from "@/components/interactive-faq"
import { SmoothScroll } from "@/components/smooth-scroll"
import { AnimatedCounter } from "@/components/animated-counter"
import { FloatingElements } from "@/components/floating-elements"
import { SectionReveal } from "@/components/section-reveal"
import { useState, useEffect } from "react"
import Link from "next/link"
import MovingDotsBackground from "@/components/moving-dots-background"
import { blogPosts } from "@/lib/blog-data"
import { Instagram, Youtube, Mail, Send, Linkedin } from "lucide-react"
import Image from "next/image"
import { fetchThreePosts } from "@/lib/blogApi"
import SubscriptionModal from "@/components/SubscriptionModal"
interface Blog {
  id: number;
  slug: string;
  title: string;
  description: string;
  author: string;
  category: string;
  featured: boolean;
  image: string;
  publishedDate: string;
  readTime: string;
}
export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [data, setData] = useState<Blog[]>([])
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    setIsVisible(true)
    fetchThreePosts()
      .then((fetchData: any) => {
        setData(fetchData)
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });

  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("https://ai-report-studio.projectwork9892.workers.dev/contacts/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fname, lname, email, subject, message }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setSuccess("Message sent successfully!");
      setFname("");
      setLname("");
      setEmail("");
      setSubject("General Inquiry");
      setMessage("");
    } catch (err: any) {
      setError(err.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <SmoothScroll />

      {/* Navigation Header */}
      <header className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-lg sm:text-xl font-bold font-serif gradient-text">
                AI Report Studio
              </Link>
            </div>

            {/* Desktop Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base"
              >
                About
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base"
              >
                Pricing
              </a>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base"
              >
                Blog
              </Link>
              <a
                href="#faq"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base"
              >
                Contact
              </a>
            </nav>

            <MobileNav isOpen={mobileMenuOpen} onToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
          </div>
        </div>
      </header>

      {/* Hero Section - Enhanced to match reference exactly */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
          <MovingDotsBackground />
          <FloatingElements />

          <div className="text-center relative z-10">
            <div
              className={`inline-flex items-center bg-blue-100/80 backdrop-blur-sm text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-bounce-subtle ${isVisible ? "animate-fade-in-scale" : "opacity-0"}`}
            >
              <span className="mr-2 text-green-600">✓</span>
              Trusted by 999+ Students
            </div>

            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-tight mb-6 px-2 ${isVisible ? "animate-fade-in-up animate-delay-100" : "opacity-0"}`}
            >
              Professional AI-Powered
              <br />
              <span className="gradient-text animate-gradient-shift">Project Report Generation</span>
              <br />
              Platform for Final Year Students
            </h1>

            <h2
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-500 mb-8 px-2 animate-pulse-glow ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}
            >
              Transform Ideas into Academic
              <br />
              Excellence
            </h2>

            <p
              className={`text-base sm:text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto px-4 sm:px-6 leading-relaxed ${isVisible ? "animate-fade-in-up animate-delay-300" : "opacity-0"}`}
            >
              The ultimate AI-powered platform for final year students to generate well-structured, academic project
              reports with professional templates, citation management, and academic integrity assurance.
            </p>

            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 max-w-2xl mx-auto ${isVisible ? "animate-fade-in-up animate-delay-400" : "opacity-0"}`}
            >
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 card-hover animate-float-slow shadow-lg border border-white/20">
                <AnimatedCounter
                  end={2999}
                  suffix="+"
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2"
                />
                <div className="text-gray-600 text-sm sm:text-base font-medium">Reports Generated</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 card-hover animate-float-medium animate-delay-500 shadow-lg border border-white/20">
                <AnimatedCounter
                  end={999}
                  suffix="+"
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2"
                />
                <div className="text-gray-600 text-sm sm:text-base font-medium">Happy Students</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 card-hover animate-float-fast animate-delay-1000 shadow-lg border border-white/20">
                <AnimatedCounter
                  end={98}
                  suffix="%"
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2"
                />
                <div className="text-gray-600 text-sm sm:text-base font-medium">Success Rate</div>
              </div>
            </div>

            <div
              className={`flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 px-4 ${isVisible ? "animate-fade-in-up animate-delay-500" : "opacity-0"}`}
            >
              <Button onClick={() => setModalOpen(true)} className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-base md:text-lg w-full sm:w-auto min-h-[48px] font-semibold btn-hover-effect rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="relative z-10">Get Started Free</span>
              </Button>
              {/* <Button
                variant="outline"
                className="px-8 py-4 text-base md:text-lg bg-white/80 backdrop-blur-sm w-full sm:w-auto min-h-[48px] font-semibold btn-hover-effect rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/80 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10">Watch Demo Video</span>
              </Button> */}
              <Button
                id="demo"
                variant="outline"
                className="group relative px-8 py-4 text-base md:text-lg bg-white/80 backdrop-blur-sm w-full sm:w-auto min-h-[48px] font-semibold btn-hover-effect rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/80 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Default text */}
                <span className="block transition-all duration-300 transform group-hover:-translate-y-2 group-hover:opacity-0">
                  Watch Demo Video
                </span>

                {/* Hover text */}
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  Coming Soon...
                </span>
              </Button>
            </div>
            {/* 
            <p
              className={`text-xs sm:text-sm text-gray-500 px-4 animate-bounce-subtle ${isVisible ? "animate-fade-in-up animate-delay-600" : "opacity-0"}`}
            >
              No credit card required • Free 7-day trial • Cancel anytime
            </p> */}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative bg-gray-50 overflow-hidden">
          <MovingDotsBackground />
          <SectionReveal>
            <section id="about" className="py-12 md:py-20 bg-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent"></div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4 animate-fade-in-up px-2">
                    About AI Report Studio
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-delay-100 px-4 leading-relaxed">
                    We're dedicated to helping final year students create exceptional project reports that meet academic
                    standards and showcase their hard work professionally.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
                  <div className="animate-fade-in-left">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-gray-900 mb-4 px-2">
                      Our Story & Vision
                    </h3>
                    <div className="space-y-4 text-justify px-2">
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                        Founded by a team of educators and technology experts, AI Report Studio was born from the
                        understanding that final year students face immense pressure to deliver high-quality project
                        reports while juggling multiple academic responsibilities.
                      </p>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                        We believe every student deserves access to professional tools that can help them present their
                        ideas clearly, maintain academic integrity, and achieve their educational goals with confidence.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 animate-fade-in-right">
                    <div className="text-center p-3 sm:p-4 card-hover bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg min-h-[100px] flex flex-col justify-center animate-float-slow">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">2+</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium">Years of Excellence</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 card-hover bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg min-h-[100px] flex flex-col justify-center animate-float-medium animate-delay-500">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">2999+</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium">Reports Generated</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 card-hover bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg min-h-[100px] flex flex-col justify-center animate-float-fast animate-delay-1000">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">999+</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium">Satisfied Students</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 card-hover bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg min-h-[100px] flex flex-col justify-center animate-float-medium animate-delay-1500">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">98%</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium">Success Rate</div>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                  <div className="text-center animate-fade-in-up p-6 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg card-hover">
                    <h4 className="text-lg sm:text-xl font-bold font-serif text-gray-900 mb-3">Mission-Driven</h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Empowering students to excel in their academic journey with professional-grade report generation
                      tools.
                    </p>
                  </div>
                  <div className="text-center animate-fade-in-up animate-delay-100 p-6 bg-gradient-to-br from-white to-cyan-50 rounded-xl shadow-lg card-hover">
                    <h4 className="text-lg sm:text-xl font-bold font-serif text-gray-900 mb-3">Student-Focused</h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Built specifically for final year students who need reliable, structured, and well-formatted
                      project reports.
                    </p>
                  </div>
                  <div className="text-center animate-fade-in-up animate-delay-200 p-6 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg card-hover sm:col-span-2 md:col-span-1">
                    <h4 className="text-lg sm:text-xl font-bold font-serif text-gray-900 mb-3">Innovation First</h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Leveraging cutting-edge AI technology to streamline the report writing process while maintaining
                      academic integrity.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </SectionReveal>
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-10 bg-white overflow-hidden">
          <MovingDotsBackground />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4 px-2">
                Why Choose AI Report Studio?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
                We're not just another report writing tool. We're your academic success partner, designed specifically
                for the unique needs of final year students.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
              <div className="text-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <AnimatedCounter
                  end={2999}
                  suffix="+"
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2"
                />
                <div className="text-gray-600 text-xs sm:text-sm font-medium">Reports Generated</div>
              </div>
              <div className="text-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <AnimatedCounter
                  end={999}
                  suffix="+"
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2"
                />
                <div className="text-gray-600 text-xs sm:text-sm font-medium">Happy Students</div>
              </div>
              <div className="text-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <AnimatedCounter
                  end={98}
                  suffix="%"
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2"
                />
                <div className="text-gray-600 text-xs sm:text-sm font-medium">Success Rate</div>
              </div>
              <div className="text-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
                <div className="text-gray-600 text-xs sm:text-sm font-medium">Average Rating</div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <Card className="transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg group-hover:text-blue-600 transition-colors duration-200">
                    Lightning Fast
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Generate professional reports in minutes, not days. Our AI-powered platform streamlines the entire
                    process.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg group-hover:text-blue-600 transition-colors duration-200">
                    Academic Integrity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Built-in plagiarism detection and original content generation ensure your work meets the highest
                    academic standards.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg group-hover:text-blue-600 transition-colors duration-200">
                    Trusted by Thousands
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Join over 999+ successful students who have transformed their academic journey with our platform.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg group-hover:text-blue-600 transition-colors duration-200">
                    Proven Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Students using our platform report 40% higher grades and 60% less time spent on formatting.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg group-hover:text-blue-600 transition-colors duration-200">
                    PPT Generation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Instantly create polished PowerPoint presentations directly from your project report with AI-driven
                    slide structuring.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg group-hover:text-blue-600 transition-colors duration-200">
                    Viva Questions Generator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Get AI-generated viva questions tailored to your project topic, ensuring you’re fully prepared for
                    evaluations.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg group-hover:text-blue-600 transition-colors duration-200">
                    Project Report Audit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Comprehensive AI audit to check formatting, citations, grammar, and overall quality before final
                    submission.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg group-hover:text-blue-600 transition-colors duration-200">
                    Smart Academic Toolkit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Generate UML diagrams, create flow charts, check grammar accuracy, and track your project progress — all in one place.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 md:mt-16 bg-white rounded-lg p-6 md:p-8 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-gray-900 mb-6 text-center">
                Everything You Need for Academic Success
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-start space-x-3 p-2">
                  <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">
                    AI-powered content suggestions and improvements
                  </span>
                </div>
                <div className="flex items-start space-x-3 p-2">
                  <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">
                    Automatic formatting according to academic standards
                  </span>
                </div>
                {/* <div className="flex items-start space-x-3 p-2">
                  <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">
                    Built-in citation management and bibliography generation
                  </span>
                </div> */}
                {/* <div className="flex items-start space-x-3 p-2">
                  <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">
                    Real-time collaboration with supervisors and peers
                  </span>
                </div> */}
                <div className="flex items-start space-x-3 p-2">
                  <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Multiple export formats (PDF, Word, LaTeX)</span>
                </div>
                <div className="flex items-start space-x-3 p-2">
                  <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">
                    Plagiarism detection and originality reports
                  </span>
                </div>
                <div className="flex items-start space-x-3 p-2">
                  <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">
                    Grammar and style checking with suggestions
                  </span>
                </div>
                <div className="flex items-start space-x-3 p-2">
                  <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Backup protection</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="relative py-10 bg-white overflow-hidden">
          <MovingDotsBackground />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Students Say About AI Report Studio</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of successful students who have transformed their academic journey with our professional
                report generation platform.
              </p>
            </div>

            {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    "AI Report Studio saved me weeks of formatting and structuring work. My final year project report
                    looked incredibly professional, and I got an A+ grade!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src="/young-woman-computer-science-headshot.png"
                      alt="Sarah Johnson"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">Sarah Johnson</div>
                      <div className="text-sm text-gray-500">Computer Science Student, MIT</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    "The AI-powered suggestions helped me organize my thoughts better. The templates are exactly what
                    academic institutions expect. Highly recommended!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src="/young-asian-engineer-headshot.png"
                      alt="Michael Chen"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">Michael Chen</div>
                      <div className="text-sm text-gray-500">Engineering Student, Stanford University</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    "I was struggling with my capstone project report until I found AI Report Studio. The platform made the
                    entire process smooth and stress-free."
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src="/latina-business-student-headshot.png"
                      alt="Emily Rodriguez"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">Emily Rodriguez</div>
                      <div className="text-sm text-gray-500">Business Administration, Harvard Business School</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    "The citation management and bibliography features are outstanding. It automatically formatted
                    everything according to my university's guidelines."
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src="/placeholder-5u68k.png"
                      alt="David Thompson"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">David Thompson</div>
                      <div className="text-sm text-gray-500">Data Science Student, UC Berkeley</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    "As an international student, I was worried about meeting academic writing standards. AI Report Studio
                    helped me create a report that exceeded expectations."
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src="/young-indian-woman-psychology-student-headshot.png"
                      alt="Priya Patel"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">Priya Patel</div>
                      <div className="text-sm text-gray-500">Psychology Student, Oxford University</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    "The technical diagram integration and equation formatting features are incredible. My engineering
                    report looked publication-ready."
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src="/young-engineer-headshot.png"
                      alt="James Wilson"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">James Wilson</div>
                      <div className="text-sm text-gray-500">Mechanical Engineering, Georgia Tech</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div> */}


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    "AI Report Studio saved me weeks of formatting and structuring work. My final year project report
                    looked incredibly professional, and I got top grades!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="https://pub-02829b422ac049a0a11ee1c4ca66bb96.r2.dev/website/sakshi.webp"
                      alt="Ankita R."
                      width={48}   // 👈 matches w-12 (12 * 4px = 48px)
                      height={48}  // 👈 matches h-12 (12 * 4px = 48px)
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">Sakshi R.</div>
                      <div className="text-sm text-gray-500">Computer Engg, MSBTE </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    "This is like having a personal report assistant. The AI understood my topic, wrote detailed content, and formatted everything according to my department’s guidelines."
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="https://pub-02829b422ac049a0a11ee1c4ca66bb96.r2.dev/website/kaushik.webp"
                      alt="Kaushik G."
                      width={48}   // w-12 = 48px
                      height={48}  // h-12 = 48px
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">Kaushik G.</div>
                      <div className="text-sm text-gray-500">Computer Science, RTMNU</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    "I was struggling with my capstone project report until I found AI Report Studio. The platform made the
                    entire process smooth and stress-free."
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="https://pub-02829b422ac049a0a11ee1c4ca66bb96.r2.dev/website/sanikaL.webp"
                      alt="Sanika L."
                      width={48}   // w-12 = 48px
                      height={48}  // h-12 = 48px
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">Sanika L.</div>
                      <div className="text-sm text-gray-500">Computer Engg, Pune University</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    "I uploaded my project details and within minutes had a professional-looking report ready to submit. The AI maintained academic tone and structure perfectly."
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="https://pub-02829b422ac049a0a11ee1c4ca66bb96.r2.dev/website/pratik.webp"
                      alt="Arjun Verma"
                      width={48}   // w-12 = 48px
                      height={48}  // h-12 = 48px
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">Pratik D.</div>
                      <div className="text-sm text-gray-500">MCA, SPPU</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    "As a final-year student, I’ve used many report templates, but this AI platform truly simplifies academic writing. It automates everything from structure to citations flawlessly."
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="https://pub-02829b422ac049a0a11ee1c4ca66bb96.r2.dev/website/Pratiksha.webp"
                      alt="Pratiksha D."
                      width={48}   // w-12 = 48px
                      height={48}  // h-12 = 48px
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">Pratiksha D.</div>
                      <div className="text-sm text-gray-500">Computer Science, SPPU</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    "Creating my final-year project report used to be stressful, but this platform made it effortless. It handled formatting, citations, and even the table of contents — flawlessly!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="https://pub-02829b422ac049a0a11ee1c4ca66bb96.r2.dev/website/snehal.webp"
                      alt="Snehal G."
                      width={48}   // w-12 = 48px
                      height={48}  // h-12 = 48px
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">Snehal G.</div>
                      <div className="text-sm text-gray-500">General Science, NMU</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>


            {/* <div className="text-center">
              <div className="flex justify-center items-center space-x-4 text-lg">
                <span className="font-bold text-blue-600">4.9/5 Average Rating</span>
                <span>•</span>
                <span className="font-bold text-blue-600">10,000+ Happy Students</span>
                <span>•</span>
                <span className="font-bold text-blue-600">95% Success Rate</span>
              </div>
            </div> */}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative py-10 bg-gray-50 overflow-hidden">
          <MovingDotsBackground />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect plan for your academic needs. All plans include our core features with no hidden fees
                or surprises.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Starter</CardTitle>
                  <div className="text-4xl font-bold">Free</div>
                  <CardDescription>Perfect for trying out our platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>500 credits per month
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Max. 100 credits per day
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>No support available
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>3 days backup
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>PDF export
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Text based report generation
                    </li>
                  </ul>
                  <Button className="w-full bg-transparent" variant="outline">
                    Get Started Free
                  </Button>
                </CardContent>
                <SubscriptionModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
              </Card>

              <Card className="border-blue-500 border-2 relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">Most Popular</Badge>
                <CardHeader>
                  <CardTitle className="text-2xl">Premium</CardTitle>
                  <div className="text-4xl font-bold">
                    ₹749<span className="text-lg font-normal">/per month</span>
                  </div>
                  <CardDescription>11 Modules included</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Human toned report generation
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>15,000 Credits per month
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Max. 1000 credits per day
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>High quality output
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Support available via telegram/Email
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>180 days data backup
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>31 days validity
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Text based report generation
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Plagiarism checker
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Image generation
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Viva questions generation
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Report auditing
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>PPT generator
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>UML generator
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Flow chart generation
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Grammer checker
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Progress tracker
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Feedback generation
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Free Trial</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Pro</CardTitle>
                  <div className="text-4xl font-bold">
                    ₹349<span className="text-lg font-normal">/per week</span>
                  </div>
                  <CardDescription>7 Modules Included</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Human toned report generation
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>7,500 credits per month
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Max. 600 credits per day
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>High quality output
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Support available via telegram/Email
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>31 days data backup
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>7 days validity
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Text based report generation
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Plagiarism checker
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Image generation
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Viva questions generation
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Grammer checker
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Progress tracker
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>Feedback generation
                    </li>
                  </ul>
                  <Button className="w-full bg-transparent" variant="outline">
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* <div className="text-center text-gray-600">
              <p className="mb-4">All plans include a 7-day free trial • No credit card required • Cancel anytime</p>
              <div className="flex justify-center items-center space-x-8 text-sm">
                <span>30-day money-back guarantee</span>
                <span>Student discounts available</span>
                <span>Secure payment processing</span>
              </div>
            </div> */}
          </div>
        </section>

        {/* Blog Section */}
        <SectionReveal delay={200}>
          <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
            <MovingDotsBackground />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Latest from Our Blog</h2>
                {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-delay-100">
                  Stay updated with the latest tips, tricks, and insights to help you excel in your academic writing and
                  project report creation.
                </p> */}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {
                  data.length === 0 ? "Currently no blogs available" :

                    data.map((post, index) => (
                      <Card
                        key={post.slug}
                        className={`hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-white/80 backdrop-blur-sm border-0 shadow-lg card-hover animate-fade-in-scale animate-delay-${(index + 1) * 100}`}
                      >
                        <CardHeader>
                          <Badge variant="secondary" className="w-fit mb-2 animate-bounce-subtle">
                            {post.category}
                          </Badge>
                          <CardTitle className="text-lg line-clamp-2 hover:text-blue-600 transition-colors">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-3">{post.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                            <span>By {post.author}</span>
                            <span>{post.readTime} mins</span>
                          </div>
                          <div className="text-sm text-gray-500 mb-4">{post.publishedDate}</div>
                          <Link href={`/blog/${post.slug}`}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 bg-transparent btn-hover-effect"
                            >
                              Read More
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
              </div>

              <div className="text-center">
                <Link href="/blog">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 btn-hover-effect rounded-xl shadow-lg hover:shadow-xl">
                    View All Articles
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </SectionReveal>

        {/* Contact Section */}
        <section id="contact" className="relative py-20 bg-white overflow-hidden">
          <MovingDotsBackground />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4 px-2">
                Get in Touch
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
                Have questions about AI Report Studio? Our team is here to help you succeed in your academic journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="animate-fade-in-left">
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-gray-900 mb-6 px-2">
                  Contact Information
                </h3>
                <div className="space-y-4 px-2">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-blue-600 mt-1 flex-shrink-0">📧</div>
                    <div>
                      <div className="font-semibold text-gray-900">Email Support</div>
                      <div className="text-gray-600 text-sm sm:text-base">
                        <a href="mailto:support@aiprojectreport.com" className="hover:underline">
                          support@aiprojectreport.com
                        </a>
                      </div>
                      <div className="text-gray-500 text-xs sm:text-sm">Response within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-blue-600 mt-1 flex-shrink-0">💬</div>
                    <div>
                      <div className="font-semibold text-gray-900">Chat Bot</div>
                      <div className="text-gray-600 text-sm sm:text-base">Available 24/7</div>
                      <div className="text-gray-500 text-xs sm:text-sm">Instant support for urgent queries</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-blue-600 mt-1 flex-shrink-0">📚</div>
                    <div>
                      <div className="font-semibold text-gray-900">Telegram Support</div>
                      <a
                        href="https://t.me/aireportstudio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 text-sm sm:text-base hover:text-blue-500 transition-colors"
                      >
                        @AiReportStudio
                      </a>
                      <div className="text-gray-500 text-xs sm:text-sm">Expert guidance for complex projects</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-right">
                {/* <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">Send us a Message</CardTitle>
                    <CardDescription>We'll get back to you within 24 hours</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base min-h-[44px]"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base min-h-[44px]"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base min-h-[44px]"
                        placeholder="john.doe@university.edu"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base min-h-[44px]">
                        <option>General Inquiry</option>
                        <option>Technical Support</option>
                        <option>Academic Guidance</option>
                        <option>Billing Question</option>
                        <option>Feature Request</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white btn-hover-effect min-h-[44px]">
                      Send Message
                    </Button>
                  </CardContent>
                </Card> */}
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">Send us a Message</CardTitle>
                    <CardDescription>We'll get back to you within 24 hours</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {success && <p className="text-green-600">{success}</p>}
                    {error && <p className="text-red-600">{error}</p>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                          <input
                            type="text"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base min-h-[44px]"
                            placeholder="John"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                          <input
                            type="text"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base min-h-[44px]"
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base min-h-[44px]"
                          placeholder="john.doe@example.com"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                        <select
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base min-h-[44px]"
                        >
                          <option>General Inquiry</option>
                          <option>Technical Support</option>
                          <option>Academic Guidance</option>
                          <option>Billing Question</option>
                          <option>Feature Request</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                          placeholder="Tell us how we can help you..."
                          required
                        ></textarea>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white btn-hover-effect min-h-[44px]"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="relative py-20 bg-gray-50 overflow-hidden">
          <MovingDotsBackground />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4 px-2">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
                Find answers to common questions about AI Report Studio and how it can help you create outstanding academic
                reports.
              </p>
            </div>

            <InteractiveFAQ />
          </div>
        </section>

        {/* Footer */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="text-xl sm:text-2xl font-bold font-serif mb-4 gradient-text-white">AI Report Studio</div>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                AI Final Year Project Report Generator – Create professional academic reports with AI.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Youtube</span><Youtube className="w-5 h-5 hover:text-red-500 transition-colors" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span><Instagram className="w-5 h-5 hover:text-pink-500 transition-colors" />
                </a>
                <a
                  href="mailto:support@aiprojectreport.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Email</span>
                  <Mail className="w-5 h-5 hover:text-blue-500 transition-colors" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span><Linkedin className="w-5 h-5 hover:text-blue-700 transition-colors" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Templates
                  </a>
                </li> */}
                {/* <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    API
                  </a>
                </li> */}
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#demo" className="text-gray-400 hover:text-white transition-colors">
                    Demo Video
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Webinars
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Community
                  </a>
                </li> */}
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </a>
                </li> */}
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 md:pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm sm:text-base text-center md:text-left">
                © {new Date().getFullYear()} AI Report Studio. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
