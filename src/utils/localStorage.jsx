const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Sales Report",
        description: "Compile the monthly sales report for review.",
        date: "2025-01-28",
        category: "Sales",
        active: true,
        newTask: true,
        completedTask: false,
        failed: false,
      },
      {
        title: "Team Meeting",
        description:
          "Attend the weekly team meeting to discuss project progress.",
        date: "2025-01-29",
        category: "Meeting",
        active: true,
        newTask: false,
        completedTask: false,
        failed: false,
      },
      {
        title: "Submit Expense Report",
        description: "Submit the expense report for January.",
        date: "2025-01-30",
        category: "Finance",
        active: false,
        newTask: false,
        completedTask: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Update Client Database",
        description: "Add new client details and update existing records.",
        date: "2025-01-28",
        category: "CRM",
        active: true,
        newTask: true,
        completedTask: false,
        failed: false,
      },
      {
        title: "Conduct Training Session",
        description: "Lead a training session for new hires on company tools.",
        date: "2025-01-30",
        category: "Training",
        active: true,
        newTask: false,
        completedTask: false,
        failed: false,
      },
      {
        title: "Review Budget Proposal",
        description: "Analyze and provide feedback on the proposed budget.",
        date: "2025-01-31",
        category: "Finance",
        active: false,
        newTask: false,
        completedTask: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Draft Marketing Plan",
        description: "Outline the marketing strategy for Q1.",
        date: "2025-01-28",
        category: "Marketing",
        active: true,
        newTask: true,
        completedTask: false,
        failed: false,
      },
      {
        title: "Client Feedback Review",
        description:
          "Compile and summarize feedback from recent client surveys.",
        date: "2025-01-29",
        category: "Feedback",
        active: true,
        newTask: false,
        completedTask: false,
        failed: false,
      },
      {
        title: "Finalize Campaign Design",
        description:
          "Complete and approve the design for the upcoming ad campaign.",
        date: "2025-01-30",
        category: "Design",
        active: false,
        newTask: false,
        completedTask: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Update Inventory Records",
        description: "Ensure all inventory data is accurate and up-to-date.",
        date: "2025-01-28",
        category: "Inventory",
        active: true,
        newTask: true,
        completedTask: false,
        failed: false,
      },
      {
        title: "Schedule Maintenance",
        description: "Arrange for equipment maintenance for February.",
        date: "2025-01-29",
        category: "Operations",
        active: true,
        newTask: false,
        completedTask: false,
        failed: false,
      },
      {
        title: "Prepare Presentation",
        description: "Create slides for the upcoming board meeting.",
        date: "2025-01-30",
        category: "Management",
        active: false,
        newTask: false,
        completedTask: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Organize Files",
        description: "Sort and label all documents in the shared drive.",
        date: "2025-01-28",
        category: "Administration",
        active: true,
        newTask: true,
        completedTask: false,
        failed: false,
      },
      {
        title: "Prepare Invoice",
        description: "Generate invoices for January clients.",
        date: "2025-01-29",
        category: "Finance",
        active: true,
        newTask: false,
        completedTask: false,
        failed: false,
      },
      {
        title: "Audit Reports",
        description: "Review and finalize the audit reports for submission.",
        date: "2025-01-30",
        category: "Audit",
        active: false,
        newTask: false,
        completedTask: true,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))    
}