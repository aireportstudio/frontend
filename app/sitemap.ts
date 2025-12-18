import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.aiprojectreport.com";
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/best-web-development-project-ideas-for-students-2025-complete-guide`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/top-mba-marketing-project-topics-with-case-studies-2025-guide`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/top-embedded-systems-projects-for-ece-eee-students-2025-complete-guide`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/iot-project-ideas-for-engineering-students-beginner-to-advanced-guide`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/top-electrical-electronics-engineering-final-year-projects-2025-guide`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/best-civil-engineering-projects-with-problem-statements-2025-final-year-guide`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/top-mechanical-engineering-project-ideas-2025-final-year-diploma-projects`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/how-to-explain-your-ai-project-in-an-interview-examples-tips-full-guide-for-students`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/how-to-prepare-for-project-viva-tips-strategy-100-sample-viva-questions-and-answers`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/how-to-create-a-ppt-automatically-using-ai-step-by-step-guide-for-students-professionalshow-to-create-a-ppt-automatically-using-ai-step-by-step-guide-for-students-professionals`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/why-plagiarism-is-important-in-project-reports-how-students-can-avoid-it-complete-guide`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/credit-card-fraud-detection-using-machine-learning-full-project-report-implementation-guide`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/sentiment-analysis-on-twitter-data-using-deep-learning-lstm-vs-bert-full-project-report-dataset-implementation`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/20-deep-learning-project-ideas-for-final-year-students`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/ai-based-fake-profile-detection-system-architecture-dataset-code-final-year-project-guide`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/rag-based-chatbot-project-architecture-flowchart-code-complete-guide`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/free-ai-tools-for-students-best-tools-for-learning-projects-reports`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/free-ieee-papers-for-ai-ml-projects-best-sources-for-students-to-download-research-papers`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/how-to-present-your-final-year-project-effectively-best-tips-for-students`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/ai-resume-screening-system-complete-project-guide-with-code`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/best-machine-learning-project-ideas-for-beginners`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/free-datasets-for-ai-ml-projects-complete-guide-for-students`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/how-to-write-an-ai-project-report-step-by-step-guide-for-students-2025`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/how-to-choose-the-perfect-ai-project-topic-for-college-submission-2025-guide`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/project-generation-tools-using-ai-revolutionizing-report-creation`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/ai-vs-manual-project-reports-which-is-better`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/how-ai-helps-in-formatting-and-structuring-reports`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
