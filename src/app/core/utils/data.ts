export const pageContent = {
  stats: [
    {
      label: 'Total Revenue',
      value: 5424326,
      showIcon: true,
      icon: '$',
      iconColor: '#3b82f6',
      iconBgColor: '#eff6ff',
      showPercentage: true,
      percentage: 5,
      trend: 'up' as const,
      footerText: 'Increased from last month'
    },
    {
      label: 'Total Stores',
      value: 87365,
      showIcon: true,
      icon: '🛒',
      iconColor: '#10b981',
      iconBgColor: '#d1fae5',
      showPercentage: true,
      percentage: 5,
      trend: 'up' as const,
      footerText: 'Increased from last month'
    },
    {
      label: 'Total Referrals',
      value: 324341,
      showIcon: true,
      icon: '👥',
      iconColor: '#f59e0b',
      iconBgColor: '#fef3c7',
      showPercentage: true,
      percentage: 8,
      trend: 'down' as const,
      footerText: 'Increase from last month'
    },
    {
      label: 'Total User',
      value: 3.2,
      showIcon: true,
      icon: '📊',
      iconColor: '#8b5cf6',
      iconBgColor: '#f3e8ff',
      showPercentage: true,
      percentage: -5,
      trend: 'neutral' as const,
      footerText: 'Increase from last month'
    }
  ],
  stats_revenue: [
    {
      label: 'Total Stores',
      value: 87365,
      showIcon: true,
      icon: '🛒',
      iconColor: '#10b981',
      iconBgColor: '#d1fae5',
      showPercentage: true,
      percentage: 5,
      trend: 'up' as const,
      footerText: 'Increased from last month'
    },
    {
      label: 'Total Referrals',
      value: 324341,
      showIcon: true,
      icon: '👥',
      iconColor: '#f59e0b',
      iconBgColor: '#fef3c7',
      showPercentage: true,
      percentage: 8,
      trend: 'down' as const,
      footerText: 'Increase from last month'
    },
    {
      label: 'Total User',
      value: 3.2,
      showIcon: true,
      icon: '📊',
      iconColor: '#8b5cf6',
      iconBgColor: '#f3e8ff',
      showPercentage: true,
      percentage: -5,
      trend: 'neutral' as const,
      footerText: 'Increase from last month'
    }
  ],
  stats_support: [
    {
      label: 'Total Requests',
      value: 87365,
      showIcon: true,
      icon: '🛒',
    },
    {
      label: 'Pending Requests',
      value: 324341,
      showIcon: true,
      icon: '👥',
    },
    {
      label: 'Solved Requests',
      value: 38762,
      showIcon: true,
      icon: '📊',
    }
  ],
}

export const utilis = {
  navLinks:  [
    {
      label: 'Dashboard', path: '', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      children: null,
    },
    {
      label: 'Revenue', path: '/revenue', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
      children:null,
    },
    {
      label: 'Locations', path: '/location', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
      chilren: null,
    },
    {
      label: 'Plans', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', 
      children: [
        { label: 'Add Plans', path: '/plans/add', isBorder: true },
        { label: 'Manage Plans', path: '/plans/manage',  },
      ]
    },
    {
      label: 'Stores', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      children: [
        { label: 'Add Stores', path: '/stores/add', isBorder: true },
        { label: 'Manage Stores', path: '/stores/manage' },
      ]
    },
    {
      label: 'Pages', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      children: [
        { label: 'Add Pages', path: '/pages/add',  isBorder: true },
        { label: 'Manage Pages', path: '/pages/manage' },
      ]
    },
    {
      label: 'Media', path: '/media', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
      chilren: null
    },
    {
      label: 'Users', path: '/user', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
      chilren: null
    },
    {
      label: 'Support', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
      children: [
        { label: 'Support List', path: '/support/list',  isBorder: true },
        { label: 'Support Reply', path: '/support/reply' },
      ]
    }
  ],
  teams: [
    {label: 'Profile Settings', path: 'profile', image: ''},
    {label: 'Payment Gateway', path: 'payment', image: ''},
    {label: 'Email Templates', path: 'email-template', image: ''},
    {label: 'Logo Management', path: 'logo-management', image: ''},
  ]
}