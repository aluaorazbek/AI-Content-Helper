export default [
  {
      name: 'Blog Title',
      desc: 'An AI tool that generates blog titles based on the provided niche and outline.',
      category: 'Blog',
      icon: 'https://cdn-icons-png.flaticon.com/128/8089/8089953.png',
      aiPrompt: 'Provide 5 blog title ideas, in bullet points only, based on the given niche and outline',
      slug: 'generate-blog-title',
      form: [
          {
              label: 'Blog Niche',
              field: 'input',
              name: 'niche',
              required: true
          },
          {
              label: 'Blog Outline',
              field: 'textarea',
              name: 'outline',
          }
      ]
  },
  {
      name: 'Blog Content',
      desc: 'A tool that helps generate blog content based on a topic and outline.',
      category: 'Blog',
      icon: 'https://cdn-icons-png.flaticon.com/128/9079/9079294.png',
      aiPrompt: 'Generate blog content based on the topic and outline provided.',
      slug: 'blog-content-generation',
      form: [
          {
              label: 'Blog Topic',
              field: 'input',
              name: 'topic',
              required: true
          },
          {
              label: 'Blog Outline',
              field: 'textarea',
              name: 'outline'
          }
      ]
  },
  {
      name: 'Blog Topic Ideas',
      desc: 'AI-generated blog topic ideas, tailored to your niche and outline.',
      category: 'Blog',
      icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
      slug: 'blog-topic-idea',
      aiPrompt: 'Generate 5 blog topic ideas in bullet points, based on the given niche',
      form: [
          {
              label: 'Blog Niche',
              field: 'input',
              name: 'niche',
              required: true
          },
      ]
  },
  {
    name: 'English Grammar Checker',
    desc: 'Correct your English grammar with the help of AI.',
    category: 'English',
    icon: 'https://cdn-icons-png.flaticon.com/128/4720/4720477.png',
    slug: 'english-grammar-checker',
    aiPrompt: 'Correct the grammar in the provided text',
    form: [
        {
            label: 'Text to Correct',
            field: 'input',
            name: 'inputText',
            required: true
        },
    ]
},
  {
      name: 'YouTube SEO Title',
      desc: 'Create optimized, catchy, SEO-friendly titles for YouTube videos.',
      category: 'YouTube Tools',
      icon: 'https://cdn-icons-png.flaticon.com/128/15647/15647797.png',
      slug: 'youtube-seo-title',
      aiPrompt: 'Generate 5 SEO-optimized, high-ranking title ideas in bullet point based on the provided keywords and outline. Output should be in HTML format.',
      form: [
          {
              label: 'YouTube Video Keywords',
              field: 'input',
              name: 'keywords',
              required: true
          },
          {
              label: 'YouTube Video Outline',
              field: 'textarea',
              name: 'outline'
          }
      ]
  },
  {
      name: 'YouTube Description',
      desc: 'Create concise and engaging YouTube descriptions, complete with emojis, based on your topic and outline.',
      category: 'YouTube Tools',
      icon: 'https://cdn-icons-png.flaticon.com/128/3670/3670209.png',
      slug: 'youtube-description',
      aiPrompt: 'Generate a YouTube description, under 4-5 lines, with emojis, based on the provided topic and outline',
      form: [
          {
              label: 'YouTube Video Topic/Title',
              field: 'input',
              name: 'topic',
              required: true
          },
          {
              label: 'YouTube Video Outline',
              field: 'textarea',
              name: 'outline'
          }
      ]
  },
  {
      name: 'YouTube Tags',
      desc: 'Generate relevant and effective YouTube tags based on your video title and outline.',
      category: 'YouTube Tools',
      icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
      slug: 'youtube-tag',
      aiPrompt: 'Generate 10 YouTube tags in bullet point based on the provided video title and outline',
      form: [
          {
              label: 'YouTube Video Title',
              field: 'input',
              name: 'title',
              required: true
          },
          {
              label: 'YouTube Video Outline (Optional)',
              field: 'textarea',
              name: 'outline'
          }
      ]
  },
  {
    name: 'Add Emojis to Text',
    desc: 'Add relevant emojis to the given text based on its content.',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584602.png',
    slug: 'add-emoji-to-text',
    aiPrompt: 'Add emojis to the provided text based on its context',
    form: [
        {
            label: 'Text for Emoji Addition',
            field: 'textarea',
            name: 'outline',
            required: true
        }
    ]
  },
  {
    name: 'Instagram Post',
    desc: 'Generate Instagram post content based on given keywords.',
    category: 'Instagram',
    icon: 'https://cdn-icons-png.flaticon.com/128/15707/15707749.png',
    slug: 'instagram-post-generator',
    aiPrompt: 'Generate 3 Instagram post ideas without hashtag based on the provided keywords, divided by blocks',
    form: [
        {
            label: 'Keywords for Instagram Post',
            field: 'input',
            name: 'keywords',
            required: true
        },
    ]
  },
  {
      name: 'Instagram Hashtag',
      desc: 'Generate Instagram hashtags based on given keywords.',
      category: 'Instagram',
      icon: 'https://cdn-icons-png.flaticon.com/128/8135/8135696.png',
      slug: 'instagram-hash-tag-generator',
      aiPrompt: 'Generate 15 Instagram hashtags based on the provided keywords',
      form: [
          {
              label: 'Keywords for Instagram Hashtags',
              field: 'input',
              name: 'keywords',
              required: true
          },
      ]
  },
  {
      name: 'Instagram Post/Reel Idea',
      desc: 'Generate trending Instagram post or reel ideas based on your niche.',
      category: 'Instagram',
      icon: 'https://cdn-icons-png.flaticon.com/128/11820/11820224.png',
      slug: 'instagram-post-idea-generator',
      aiPrompt: 'Generate 5-10 Instagram post/reel ideas based on the latest trends and your niche',
      form: [
          {
              label: 'Niche for Instagram Ideas',
              field: 'input',
              name: 'keywords',
              required: true
          },
      ]
  },
  {
      name: 'Article Rewriter',
      desc: 'Rewrite existing articles or blog posts to be plagiarism-free and pass AI detection.',
      category: 'Rewriting Tool',
      icon: 'https://cdn-icons-png.flaticon.com/128/2992/2992156.png',
      slug: 'rewrite-article',
      aiPrompt: 'Rewrite the given article without plagiarism',
      form: [
          {
              label: 'Article/Blog Post to Rewrite',
              field: 'textarea',
              name: 'article',
              required: true
          }
      ]
  },
  {
    name: 'Code Generator',
    desc: 'Generate programming code based on your description.',
    category: 'Coding',
    icon: 'https://cdn-icons-png.flaticon.com/128/10817/10817310.png',
    slug: 'write-code',
    aiPrompt: 'Generate code based on the provided description, specifying the programming language and with code block',
    form: [
        {
            label: 'Code Description and Programming Language',
            field: 'textarea',
            name: 'codeDescription',
            required: true
        },
    ]
  },
  {
      name: 'Code Explanation',
      desc: 'Get detailed explanations of programming code, line by line.',
      category: 'Coding',
      icon: 'https://cdn-icons-png.flaticon.com/128/2920/2920277.png',
      slug: 'explain-code',
      aiPrompt: 'Explain the provided code line by line and output with code block.',
      form: [
          {
              label: 'Code to Explain',
              field: 'textarea',
              name: 'codeDescription',
              required: true
          },
      ]
  },
  {
      name: 'Bug Detector for Code',
      desc: 'Analyze code for errors and bugs, and provide solutions.',
      category: 'Code Bug Detector',
      icon: 'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
      slug: 'code-bug-detector',
      aiPrompt: 'Detect bugs in the provided code and offer solutions, output with code block.',
      form: [
          {
              label: 'Code to Test for Bugs',
              field: 'textarea',
              name: 'codeInput',
              required: true
          },
      ]
  },
  {
      name: 'Text Improver',
      desc: 'Refine your writing by eliminating errors and redundancies, and improve clarity.',
      category: 'Writing Assistant',
      icon: 'https://cdn-icons-png.flaticon.com/128/9422/9422790.png',
      slug: 'text-improver',
      aiPrompt: 'Rewrite the provided text with improved grammar and style',
      form: [
          {
              label: 'Text to Improve',
              field: 'textarea',
              name: 'textToImprove'
          }
      ]
  },
  {
      name: 'Tagline Generator',
      desc: 'Generate catchy and creative taglines for your brand.',
      category: 'Marketing',
      icon: 'https://cdn-icons-png.flaticon.com/128/13966/13966755.png',
      slug: 'tagline-generator',
      aiPrompt: 'Generate 5-10 catchy taglines in bullet point based on the product name and outline',
      form: [
          {
              label: 'Product/Brand Name',
              field: 'input',
              name: 'productName',
              required: true
          },
          {
              label: 'Product Description',
              field: 'textarea',
              name: 'outline',
              required: true
          },
      ]
  },
  {
      name: 'Product Description',
      desc: 'Generate SEO-friendly, captivating product descriptions for e-commerce.',
      category: 'Marketing',
      icon: 'https://cdn-icons-png.flaticon.com/128/12463/12463226.png',
      slug: 'product-description',
      aiPrompt: 'Generate a product description based on the provided product name and details',
      form: [
          {
              label: 'Product Name',
              field: 'input',
              name: 'productName',
              required: true
          },
          {
              label: 'Product Details',
              field: 'textarea',
              name: 'outline',
              required: true
          },
      ]
  }
]
