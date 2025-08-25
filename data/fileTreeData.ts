import { FileTreeItem } from '@/types'

export const homeFileTreeData: FileTreeItem[] = [
  {
    id: 'portfolio',
    name: 'portfolio',
    type: 'folder',
    icon: 'ri-folder-line',
    iconColor: 'text-blue-400',
    expanded: true,
    children: [
      {
        id: 'pages',
        name: 'pages',
        type: 'folder',
        icon: 'ri-folder-line',
        iconColor: 'text-blue-400',
        expanded: true,
        children: [
          {
            id: 'intro',
            name: 'intro.js',
            type: 'file',
            icon: 'ri-javascript-line',
            iconColor: 'text-yellow-400',
            active: true
          },
          {
            id: 'about',
            name: 'about.md',
            type: 'file',
            icon: 'ri-markdown-line',
            iconColor: 'text-gray-400'
          },
          {
            id: 'projects',
            name: 'projects.tsx',
            type: 'file',
            icon: 'ri-reactjs-line',
            iconColor: 'text-cyan-400'
          },
          {
            id: 'contact',
            name: 'contact.js',
            type: 'file',
            icon: 'ri-javascript-line',
            iconColor: 'text-yellow-400'
          }
        ]
      },
      {
        id: 'components',
        name: 'components',
        type: 'folder',
        icon: 'ri-folder-line',
        iconColor: 'text-blue-400',
        expanded: true,
        children: [
          {
            id: 'contact_form',
            name: 'ContactForm.tsx',
            type: 'file',
            icon: 'ri-reactjs-line',
            iconColor: 'text-cyan-400'
          },
          {
            id: 'error_boundary',
            name: 'ErrorBoundary.tsx',
            type: 'file',
            icon: 'ri-reactjs-line',
            iconColor: 'text-red-400'
          },
          {
            id: 'icon',
            name: 'Icon.tsx',
            type: 'file',
            icon: 'ri-reactjs-line',
            iconColor: 'text-cyan-400'
          },
          {
            id: 'nav',
            name: 'Nav.tsx',
            type: 'file',
            icon: 'ri-reactjs-line',
            iconColor: 'text-cyan-400'
          },
          {
            id: 'tech_filter',
            name: 'TechFilter.tsx',
            type: 'file',
            icon: 'ri-reactjs-line',
            iconColor: 'text-cyan-400'
          },
          {
            id: 'game_folder',
            name: 'game',
            type: 'folder',
            icon: 'ri-folder-line',
            iconColor: 'text-blue-400',
            expanded: true,
            children: [
              {
                id: 'snake_game',
                name: 'SnakeGame.tsx',
                type: 'file',
                icon: 'ri-gamepad-line',
                iconColor: 'text-green-400'
              }
            ]
          },
          {
            id: 'layout_folder',
            name: 'layout',
            type: 'folder',
            icon: 'ri-folder-line',
            iconColor: 'text-blue-400',
            expanded: true,
            children: [
              {
                id: 'vscode_layout',
                name: 'VSCodeLayout.tsx',
                type: 'file',
                icon: 'ri-reactjs-line',
                iconColor: 'text-cyan-400'
              },
              {
                id: 'file_tree',
                name: 'FileTree.tsx',
                type: 'file',
                icon: 'ri-reactjs-line',
                iconColor: 'text-cyan-400'
              },
              {
                id: 'editor_tabs',
                name: 'EditorTabs.tsx',
                type: 'file',
                icon: 'ri-reactjs-line',
                iconColor: 'text-cyan-400'
              }
            ]
          }
        ]
      },
      {
        id: 'styles',
        name: 'styles',
        type: 'folder',
        icon: 'ri-folder-line',
        iconColor: 'text-blue-400',
        expanded: true,
        children: [
          {
            id: 'globals',
            name: 'globals.css',
            type: 'file',
            icon: 'ri-css3-line',
            iconColor: 'text-blue-500'
          }
        ]
      },
      {
        id: 'hooks',
        name: 'hooks',
        type: 'folder',
        icon: 'ri-folder-line',
        iconColor: 'text-blue-400',
        expanded: true,
        children: [
          {
            id: 'snake_hook',
            name: 'useSnakeGame.ts',
            type: 'file',
            icon: 'ri-javascript-line',
            iconColor: 'text-blue-400'
          }
        ]
      },
      {
        id: 'types',
        name: 'types',
        type: 'folder',
        icon: 'ri-folder-line',
        iconColor: 'text-blue-400',
        expanded: true,
        children: [
          {
            id: 'types_index',
            name: 'index.ts',
            type: 'file',
            icon: 'ri-javascript-line',
            iconColor: 'text-blue-400'
          }
        ]
      },
      {
        id: 'data',
        name: 'data',
        type: 'folder',
        icon: 'ri-folder-line',
        iconColor: 'text-blue-400',
        expanded: true,
        children: [
          {
            id: 'file_tree_data',
            name: 'fileTreeData.ts',
            type: 'file',
            icon: 'ri-javascript-line',
            iconColor: 'text-blue-400'
          },
          {
            id: 'projects_data',
            name: 'projectsData.ts',
            type: 'file',
            icon: 'ri-javascript-line',
            iconColor: 'text-blue-400'
          }
        ]
      },
      {
        id: 'package_json',
        name: 'package.json',
        type: 'file',
        icon: 'ri-nodejs-line',
        iconColor: 'text-green-400'
      },
      {
        id: 'next_config',
        name: 'next.config.js',
        type: 'file',
        icon: 'ri-settings-line',
        iconColor: 'text-orange-400'
      },
      {
        id: 'tailwind_config',
        name: 'tailwind.config.ts',
        type: 'file',
        icon: 'ri-palette-line',
        iconColor: 'text-cyan-400'
      },
      {
        id: 'tsconfig',
        name: 'tsconfig.json',
        type: 'file',
        icon: 'ri-file-code-line',
        iconColor: 'text-blue-400'
      },

      {
        id: 'readme',
        name: 'README.md',
        type: 'file',
        icon: 'ri-markdown-line',
        iconColor: 'text-gray-400'
      }
    ]
  }
]

export const aboutFileTreeData: FileTreeItem[] = [
  {
    id: 'about_portfolio',
    name: 'about-me',
    type: 'folder',
    icon: 'ri-folder-line',
    iconColor: 'text-blue-400',
    expanded: true,
    children: [
      {
        id: 'bio',
        name: 'bio',
        type: 'folder',
        icon: 'ri-folder-line',
        iconColor: 'text-blue-400',
        expanded: true,
        children: [
          {
            id: 'education',
            name: 'education',
            type: 'file',
            icon: 'ri-graduation-cap-line',
            iconColor: 'text-purple-400',
            active: true
          },
          {
            id: 'experience',
            name: 'experience.js',
            type: 'file',
            icon: 'ri-javascript-line',
            iconColor: 'text-yellow-400'
          },
          {
            id: 'skills',
            name: 'skills.json',
            type: 'file',
            icon: 'ri-braces-line',
            iconColor: 'text-green-400'
          }
        ]
      },
      {
        id: 'interests',
        name: 'interests',
        type: 'folder',
        icon: 'ri-folder-line',
        iconColor: 'text-blue-400',
        expanded: true,
        children: [
          {
            id: 'embedded_systems',
            name: 'embedded-systems.cpp',
            type: 'file',
            icon: 'ri-cpu-line',
            iconColor: 'text-orange-400'
          },
          {
            id: 'coding',
            name: 'coding.md',
            type: 'file',
            icon: 'ri-markdown-line',
            iconColor: 'text-gray-400'
          },
          {
            id: 'gaming',
            name: 'gaming.txt',
            type: 'file',
            icon: 'ri-file-text-line',
            iconColor: 'text-gray-300'
          }
        ]
      }
    ]
  }
]

export const projectsFileTreeData: FileTreeItem[] = [
  {
    id: 'projects_portfolio',
    name: 'projects',
    type: 'folder',
    icon: 'ri-folder-line',
    iconColor: 'text-blue-400',
    expanded: true,
    children: [
      {
        id: 'ai_ml',
        name: 'ai-ml',
        type: 'folder',
        icon: 'ri-folder-line',
        iconColor: 'text-blue-400',
        expanded: true,
        children: [
          {
            id: 'plant_disease',
            name: 'plant-disease-detection.py',
            type: 'file',
            icon: 'ri-code-line',
            iconColor: 'text-green-400'
          },
          {
            id: 'species_classification',
            name: 'species-classification.py',
            type: 'file',
            icon: 'ri-robot-line',
            iconColor: 'text-purple-400',
            active: true
          }
        ]
      },
      {
        id: 'web_development',
        name: 'web-development',
        type: 'folder',
        icon: 'ri-folder-line',
        iconColor: 'text-blue-400',
        expanded: true,
        children: [
          {
            id: 'appointment_system',
            name: 'appointment-system',
            type: 'folder',
            icon: 'ri-folder-line',
            iconColor: 'text-cyan-400',
            expanded: true,
            children: [
              {
                id: 'nextjs_app',
                name: 'app.tsx',
                type: 'file',
                icon: 'ri-reactjs-line',
                iconColor: 'text-cyan-400'
              },
              {
                id: 'mongodb_config',
                name: 'mongodb.config.js',
                type: 'file',
                icon: 'ri-database-line',
                iconColor: 'text-green-400'
              }
            ]
          }
        ]
      },
      {
        id: 'iot_projects',
        name: 'iot-projects',
        type: 'folder',
        icon: 'ri-folder-line',
        iconColor: 'text-blue-400',
        expanded: true,
        children: [
          {
            id: 'smart_waste',
            name: 'smart-waste-system.ino',
            type: 'file',
            icon: 'ri-cpu-line',
            iconColor: 'text-orange-400'
          },
          {
            id: 'smart_greenhouse',
            name: 'greenhouse-controller.py',
            type: 'file',
            icon: 'ri-plant-line',
            iconColor: 'text-green-500'
          }
        ]
      },
      {
        id: 'security',
        name: 'network-security',
        type: 'folder',
        icon: 'ri-folder-line',
        iconColor: 'text-blue-400',
        expanded: true,
        children: [
          {
            id: 'network_monitor',
            name: 'network-monitor.py',
            type: 'file',
            icon: 'ri-shield-line',
            iconColor: 'text-red-400'
          },
          {
            id: 'weka_analysis',
            name: 'data-analysis.weka',
            type: 'file',
            icon: 'ri-bar-chart-line',
            iconColor: 'text-yellow-400'
          }
        ]
      },
      {
        id: 'images',
        name: 'images',
        type: 'folder',
        icon: 'ri-folder-line',
        iconColor: 'text-purple-400',
        expanded: true,
        children: [
          {
            id: 'plant_disease_img',
            name: 'plant-disease.jpg',
            type: 'file',
            icon: 'ri-image-line',
            iconColor: 'text-green-400'
          },
          {
            id: 'species_classification_img',
            name: 'species-classification.jpg',
            type: 'file',
            icon: 'ri-image-line',
            iconColor: 'text-purple-400'
          },
          {
            id: 'appointment_system_img',
            name: 'appointment-system.jpg',
            type: 'file',
            icon: 'ri-image-line',
            iconColor: 'text-cyan-400'
          },
          {
            id: 'network_security_img',
            name: 'network-security.jpg',
            type: 'file',
            icon: 'ri-image-line',
            iconColor: 'text-red-400'
          },
          {
            id: 'smart_waste_img',
            name: 'smart-waste.jpg',
            type: 'file',
            icon: 'ri-image-line',
            iconColor: 'text-orange-400'
          },
          {
            id: 'smart_greenhouse_img',
            name: 'greenhouse.jpg',
            type: 'file',
            icon: 'ri-image-line',
            iconColor: 'text-green-500'
          }
        ]
      }
    ]
  }
]

export const contactFileTreeData: FileTreeItem[] = [
  {
    id: 'contact_portfolio',
    name: 'contact-me',
    type: 'folder',
    icon: 'ri-folder-line',
    iconColor: 'text-blue-400',
    expanded: true,
    children: [
      {
        id: 'social',
        name: 'social',
        type: 'folder',
        icon: 'ri-folder-line',
        iconColor: 'text-blue-400',
        expanded: true,
        children: [
          {
            id: 'contacts',
            name: 'contacts',
            type: 'file',
            icon: 'ri-phone-line',
            iconColor: 'text-green-400',
            active: true
          },
          {
            id: 'github',
            name: 'github.link',
            type: 'file',
            icon: 'ri-github-line',
            iconColor: 'text-gray-300'
          },
          {
            id: 'linkedin',
            name: 'linkedin.url',
            type: 'file',
            icon: 'ri-linkedin-line',
            iconColor: 'text-blue-500'
          },
          {
            id: 'email',
            name: 'email.txt',
            type: 'file',
            icon: 'ri-mail-line',
            iconColor: 'text-red-400'
          }
        ]
      },
      {
        id: 'availability',
        name: 'availability',
        type: 'folder',
        icon: 'ri-folder-line',
        iconColor: 'text-blue-400',
        expanded: true,
        children: [
          {
            id: 'schedule',
            name: 'schedule.json',
            type: 'file',
            icon: 'ri-calendar-line',
            iconColor: 'text-purple-400'
          },
          {
            id: 'timezone',
            name: 'timezone.js',
            type: 'file',
            icon: 'ri-time-line',
            iconColor: 'text-orange-400'
          }
        ]
      },
      {
        id: 'contact_form',
        name: 'ContactForm.tsx',
        type: 'file',
        icon: 'ri-reactjs-line',
        iconColor: 'text-cyan-400'
      }
    ]
  }
]

export const loadingFileTreeData: FileTreeItem[] = [
  {
    id: 'root',
    name: 'portfolio-loading',
    type: 'folder',
    icon: 'ri-folder-line',
    iconColor: 'text-blue-400',
    expanded: true,
    children: [
      {
        id: 'src',
        name: 'src',
        type: 'folder',
        icon: 'ri-folder-line',
        iconColor: 'text-blue-400',
        expanded: true,
        children: [
          {
            id: 'components',
            name: 'components',
            type: 'folder',
            icon: 'ri-folder-line',
            iconColor: 'text-blue-400',
            expanded: true,
            children: [
              {
                id: 'loader',
                name: 'Loader.tsx',
                type: 'file',
                icon: 'ri-reactjs-line',
                iconColor: 'text-cyan-400'
              }
            ]
          },
          {
            id: 'utils',
            name: 'utils',
            type: 'folder',
            icon: 'ri-folder-line',
            iconColor: 'text-blue-400',
            expanded: true,
            children: [
              {
                id: 'spinner',
                name: 'spinner.js',
                type: 'file',
                icon: 'ri-javascript-line',
                iconColor: 'text-yellow-400',
                active: true
              }
            ]
          }
        ]
      },
      {
        id: 'package',
        name: 'package.json',
        type: 'file',
        icon: 'ri-nodejs-line',
        iconColor: 'text-green-400'
      },
      {
        id: 'readme',
        name: 'README.md',
        type: 'file',
        icon: 'ri-markdown-line',
        iconColor: 'text-gray-400'
      }
    ]
  }
]
