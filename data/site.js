window.SITE_DATA = {
  "site": {
    "title": "Jiace Zhu | Academic Homepage",
    "description": "Academic homepage of Jiace Zhu, Ph.D. student at Shanghai Jiao Tong University.",
    "brand": "Jiace Zhu",
    "nav": [
      { "label": "About", "href": "#about" },
      { "label": "Publications", "href": "#publications" },
      { "label": "Honors", "href": "#honors" },
      { "label": "Misc", "href": "#misc" }
    ],
    "footerNote": "Last updated April 2026 | Jiace Zhu"
  },
  "profile": {
    "eyebrow": "Ph.D. Student | Shanghai Jiao Tong University",
    "name": "Jiace Zhu",
    "chineseName": "朱嘉策",
    "portrait": {
      "src": "figs/myphoto3.jpg",
      "alt": "Jiace Zhu"
    },
    "bio": [
      [
        "I am a Ph.D. student at ",
        { "label": "Global College", "href": "https://gc.sjtu.edu.cn/" },
        ", Shanghai Jiao Tong University, advised by Prof. An Zou in the ",
        { "label": "Efficient Computing Hardware and System Lab (ECHSL)", "href": "https://sites.gc.sjtu.edu.cn/zouan/" },
        ". I received my B.E. degree in Computer Science and Technology from Tongji University in 2024."
      ],
      "My research lies in efficient AI systems and hardware-aware computing, with a focus on LLM-driven GPU programming, efficient LLM inference, real-time scheduling on heterogeneous architectures, and neural network compression for resource-constrained deployment."
    ],
    "links": [
      { "label": "Email", "href": "mailto:zhujiace@sjtu.edu.cn", "primary": true },
      { "label": "GitHub", "href": "https://github.com/zhujiace/" },
      { "label": "Google Scholar", "href": "https://scholar.google.com/citations?user=91nlQ9kAAAAJ" },
      { "label": "LinkedIn", "href": "https://www.linkedin.com/in/jiace-zhu-371545320/" }
    ]
  },
  "about": {
    "eyebrow": "About",
    "kicker": "Education and experience",
    "educationTitle": "Education",
    "education": [
      {
        "title": "Shanghai Jiao Tong University",
        "meta": [
          "Ph.D. Student, Global College",
          "Advisor: Prof. An Zou | Efficient Computing Hardware and System Lab"
        ],
        "time": "2024 - Present"
      },
      {
        "title": "Tongji University",
        "meta": [
          "B.E. in Computer Science and Technology"
        ],
        "time": "2020 - 2024"
      }
    ],
    "internshipTitle": "Internship",
    "internships": [
      {
        "title": "Biren Technology",
        "meta": [
          "Research Intern"
        ],
        "time": "Present"
      }
    ]
  },
  "publications": {
    "eyebrow": "Publications",
    "kicker": "Selected work",
    "title": "Papers",
    "detailsLabel": "Details",
    "hideLabel": "Hide",
    "items": [
      {
        "id": "cudabench",
        "title": "CUDABench: Benchmarking LLMs for Text-to-CUDA Generation",
        "authors": [
          { "name": "Jiace Zhu", "self": true },
          { "name": "Wentao Chen" },
          { "name": "Qi Fan" },
          { "name": "Zhixing Ren" },
          { "name": "Junying Wu" },
          { "name": "Xing Zhe Chai" },
          { "name": "Chotiwit Rungrueangwutthinon" },
          { "name": "Yehan Ma" },
          { "name": "An Zou" }
        ],
        "venue": "arXiv, 2026",
        "links": [
          { "label": "Paper", "href": "https://arxiv.org/abs/2603.02236" },
          { "label": "Code", "href": "https://github.com/CUDA-Bench/CUDABench" }
        ],
        "detail": {
          "heading": "Main idea",
          "summary": "CUDABench is a benchmark for evaluating how well LLMs translate natural-language programming tasks into correct and efficient CUDA kernels.",
          "points": [
            "Focuses on text-to-CUDA generation rather than general code generation.",
            "Measures both functional correctness and GPU performance.",
            "Provides a public benchmark and codebase for reproducible evaluation."
          ],
          "figure": {
            "src": "figs/CUDABench.pdf",
            "type": "pdf",
            "alt": "CUDABench figure preview"
          }
        }
      },
      {
        "id": "cudallm",
        "title": "CUDA-LLM: LLMs Can Write Efficient CUDA Kernels",
        "authors": [
          { "name": "Wentao Chen" },
          { "name": "Jiace Zhu", "self": true },
          { "name": "Qi Fan" },
          { "name": "Yehan Ma" },
          { "name": "An Zou" }
        ],
        "venue": "arXiv, 2025",
        "links": [
          { "label": "Paper", "href": "https://arxiv.org/abs/2506.09092" }
        ],
        "detail": {
          "heading": "Main idea",
          "summary": "CUDA-LLM studies whether LLMs can generate high-performance CUDA kernels and how prompting, feedback, and optimization strategies affect kernel quality.",
          "points": [
            "Targets GPU kernel generation for performance-sensitive workloads.",
            "Compares correctness and efficiency across generated CUDA implementations.",
            "Highlights the potential of LLM-assisted low-level programming."
          ],
          "figure": {
            "src": "figs/CUDA_LLM.pdf",
            "type": "pdf",
            "alt": "CUDA-LLM figure preview"
          }
        }
      },
      {
        "id": "path",
        "title": "Path-Consistency with Prefix Enhancement for Efficient Inference in LLMs",
        "authors": [
          { "name": "Jiace Zhu", "self": true },
          { "name": "Yuanzhe Huang" },
          { "name": "Yingtao Shen" },
          { "name": "Jie Zhao" },
          { "name": "An Zou" }
        ],
        "venue": "arXiv, 2024",
        "links": [
          { "label": "Paper", "href": "https://arxiv.org/abs/2409.01281" }
        ],
        "detail": {
          "heading": "Main idea",
          "summary": "This work improves efficient LLM inference by using path-consistency and prefix enhancement to reuse or guide computation across generation paths.",
          "points": [
            "Focuses on reducing inference cost for large language models.",
            "Uses prefix information to strengthen consistency during decoding.",
            "Aims to preserve output quality while improving efficiency."
          ],
          "figure": {
            "src": "figs/path-consistency.pdf",
            "type": "pdf",
            "alt": "Path-Consistency figure preview"
          }
        }
      },
      {
        "id": "rtheter",
        "title": "RTHeter: Simulating Real-Time Scheduling of Multiple Tasks on Heterogeneous Architectures",
        "authors": [
          { "name": "Yinchen Ni" },
          { "name": "Jiace Zhu", "self": true },
          { "name": "Yier Jin" },
          { "name": "An Zou" }
        ],
        "venue": "DATE, 2025",
        "links": [
          { "label": "DBLP", "href": "https://dblp.org/rec/conf/date/NiZJZ25" }
        ],
        "detail": {
          "heading": "Main idea",
          "summary": "RTHeter simulates real-time scheduling of multiple tasks across heterogeneous computing resources such as GPUs and FPGAs.",
          "points": [
            "Models scheduling behavior for heterogeneous architectures.",
            "Supports analysis of timing constraints and resource assignment.",
            "Connects real-time systems with accelerator-rich platforms."
          ],
          "figure": {
            "src": "figs/RTHeter.pdf",
            "type": "pdf",
            "alt": "RTHeter figure preview"
          }
        }
      },
      {
        "id": "compression",
        "title": "Compression Space Search: RL-Based Combinational Compression for Neural Networks",
        "authors": [
          { "name": "Yingtao Shen" },
          { "name": "Yinchen Ni" },
          { "name": "Jiace Zhu", "self": true },
          { "name": "Jie Zhao" },
          { "name": "An Zou" }
        ],
        "venue": "DATE, 2026",
        "links": [
          { "label": "Paper", "href": "https://past.date-conference.com/proceedings-archive/2026/DATA/359.pdf" }
        ],
        "detail": {
          "heading": "Main idea",
          "summary": "Compression Space Search uses reinforcement learning to explore combinations of neural network compression methods for efficient deployment.",
          "points": [
            "Searches over compression choices instead of applying a single fixed method.",
            "Balances model compactness with task performance.",
            "Targets efficient neural networks for hardware-constrained settings."
          ],
          "figure": {
            "src": "figs/Compression.png",
            "type": "image",
            "alt": "Compression Space Search figure"
          }
        }
      }
    ]
  },
  "honors": {
    "eyebrow": "Honors",
    "kicker": "Awards",
    "title": "Honors And Awards",
    "items": [
      "ESWEEK 2025 Embedded System Software Competition third prize."
    ]
  },
  "misc": {
    "eyebrow": "Misc",
    "kicker": "Personal interests",
    "title": "Interests And Activities",
    "items": [
      "Physics: second prize in the Chinese Physics Olympiad provincial contest; second prize in the Shanghai division of the National College Student Physics Competition.",
      "Intelligent vehicle: national second prize in the Baidu Intelligent Transportation creative group of the National University Student Intelligent Car Race."
    ]
  },
  "footerLinks": [
    { "label": "Email", "href": "mailto:zhujiace@sjtu.edu.cn" },
    { "label": "GitHub", "href": "https://github.com/zhujiace/" },
    { "label": "Google Scholar", "href": "https://scholar.google.com/citations?user=91nlQ9kAAAAJ" },
    { "label": "DBLP", "href": "https://dblp.org/pid/386/8010.html" }
  ]
}
;
