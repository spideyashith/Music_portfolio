import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  { label: "Dashboard", icon: "🏠" },
  { label: "Users", icon: "👤" },
  { label: "Music", icon: "🎵" },
  { label: "Events", icon: "📅" },
  { label: "Settings", icon: "⚙️" },
];

const dashboardCards = [
  { title: "Total Users", value: "1,245", icon: "👥" },
  { title: "Albums Released", value: "12", icon: "💿" },
  { title: "Upcoming Events", value: "3", icon: "📆" },
  { title: "Revenue", value: "$8,400", icon: "💰" },
];

const AdminPanel: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border p-6 flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-8 text-foreground">Admin Panel</h2>
        <nav className="flex flex-col gap-4">
          {sidebarItems.map((item) => (
            <Button key={item.label} variant="ghost" className="justify-start text-lg">
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </Button>
          ))}
        </nav>
      </aside>
      {/* Main Dashboard */}
      <main className="flex-1 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {dashboardCards.map((card) => (
          <Card key={card.title} className="p-6 flex flex-col items-center justify-center shadow-elegant bg-popover">
            <span className="text-4xl mb-2">{card.icon}</span>
            <h3 className="text-xl font-semibold mb-1 text-foreground">{card.title}</h3>
            <p className="text-2xl font-bold text-primary">{card.value}</p>
          </Card>
        ))}
      </main>
    </div>
  );
};

export default AdminPanel;
