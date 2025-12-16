import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="border-grid border-t py-6 md:px-8 md:py-0">
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Originally built by{" "}
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              shadcn
            </a>
            . Forked and customized with accessibility enhancements. The source code is available on{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            {" | "}
            <a
              href={siteConfig.links.originalProject}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Original Project
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  )
}
