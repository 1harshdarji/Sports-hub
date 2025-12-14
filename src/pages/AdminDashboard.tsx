import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  BarChart3,
  Activity,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Bell,
  Search,
  Menu
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const stats = [
  { label: "Total Members", value: "5,234", change: "+12%", trend: "up", icon: Users },
  { label: "Active Bookings", value: "142", change: "+8%", trend: "up", icon: Calendar },
  { label: "Monthly Revenue", value: "$87,430", change: "+23%", trend: "up", icon: DollarSign },
  { label: "Attendance Rate", value: "89%", change: "-2%", trend: "down", icon: TrendingUp },
];

const recentMembers = [
  { name: "Sarah Johnson", email: "sarah@example.com", plan: "Premium", joined: "Today" },
  { name: "Michael Chen", email: "michael@example.com", plan: "Elite", joined: "Yesterday" },
  { name: "Emily Williams", email: "emily@example.com", plan: "Basic", joined: "2 days ago" },
  { name: "David Brown", email: "david@example.com", plan: "Premium", joined: "3 days ago" },
];

const recentBookings = [
  { member: "John Doe", facility: "Tennis Court 2", time: "10:00 AM", status: "confirmed" },
  { member: "Jane Smith", facility: "Swimming Pool", time: "11:00 AM", status: "pending" },
  { member: "Bob Wilson", facility: "Fitness Center", time: "2:00 PM", status: "confirmed" },
  { member: "Alice Brown", facility: "Yoga Studio", time: "4:00 PM", status: "confirmed" },
];

const sidebarLinks = [
  { label: "Dashboard", icon: BarChart3, active: true },
  { label: "Members", icon: Users, active: false },
  { label: "Bookings", icon: Calendar, active: false },
  { label: "Coaches", icon: Activity, active: false, href: "/coaches" },
  { label: "Revenue", icon: DollarSign, active: false },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r bg-card">
        <div className="p-6 border-b">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold">SportHub Admin</span>
          </Link>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {sidebarLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.href || "#"}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    link.active 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-lg">👤</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm">Admin User</p>
              <p className="text-xs text-muted-foreground">admin@sporthub.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-16 border-b bg-card flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-5 h-5" />
            </Button>
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-9 w-64" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full" />
            </Button>
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center lg:hidden">
              <span className="text-sm">👤</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, i) => (
              <Card key={i} variant="elevated">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className={`text-sm font-medium flex items-center gap-1 ${
                      stat.trend === 'up' ? 'text-accent' : 'text-destructive'
                    }`}>
                      {stat.change}
                      {stat.trend === 'up' 
                        ? <ArrowUpRight className="w-3 h-3" /> 
                        : <ArrowDownRight className="w-3 h-3" />
                      }
                    </span>
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Members */}
            <Card variant="elevated">
              <CardHeader className="flex flex-row items-center justify-between py-4">
                <CardTitle className="text-lg">Recent Members</CardTitle>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {recentMembers.map((member, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center font-medium">
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{member.name}</p>
                          <p className="text-xs text-muted-foreground">{member.email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs">{member.plan}</Badge>
                        <p className="text-xs text-muted-foreground mt-1">{member.joined}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Bookings */}
            <Card variant="elevated">
              <CardHeader className="flex flex-row items-center justify-between py-4">
                <CardTitle className="text-lg">Today's Bookings</CardTitle>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {recentBookings.map((booking, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{booking.member}</p>
                          <p className="text-xs text-muted-foreground">{booking.facility}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{booking.time}</p>
                        <Badge 
                          variant={booking.status === 'confirmed' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {booking.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
