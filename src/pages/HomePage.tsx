import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Header section with proper spacing */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Template Demo App
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              This demonstrates proper page organization and professional layout patterns
            </p>
          </div>

          {/* Example card layout with proper spacing */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Professional Template Features</CardTitle>
              <CardDescription>
                This template enforces consistent, high-quality UI patterns for AI agents
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Example button group with proper spacing */}
              <div className="flex flex-wrap gap-3">
                <Button>Primary Action</Button>
                <Button variant="outline">Secondary Action</Button>
                <Button variant="ghost">Tertiary Action</Button>
              </div>

              {/* Example content section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Template Improvements</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Enforced shadcn/ui component usage</li>
                  <li>• Professional Tailwind CSS patterns</li>
                  <li>• Proper page organization in src/pages/</li>
                  <li>• React Router setup for multi-page apps</li>
                  <li>• Consistent spacing and typography</li>
                  <li>• Responsive design patterns</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default HomePage;