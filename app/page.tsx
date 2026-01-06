"use client"

import { useEffect, useState } from "react"
import { Dithering } from "@paper-design/shaders-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [showProjects, setShowProjects] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [showContact, setShowContact] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="relative min-h-screen bg-transparent text-foreground overflow-hidden">
      {/* Shader background: right half on desktop, bottom half on mobile (non-interactive) */}
      <div className="absolute -z-10 pointer-events-none inset-x-0 bottom-0 h-1/2 w-full md:inset-y-0 md:right-0 md:left-auto md:w-1/2 md:h-full">
        <Dithering
          style={{ height: "100%", width: "100%" }}
          colorBack="#f7f3ea"
          colorFront="#766C7C"
          shape="cat"
          type="4x4"
          pxSize={3}
          offsetX={0}
          offsetY={0}
          scale={1}
          rotation={0}
          speed={0.1}
        />
      </div>
      <section className="relative min-h-screen flex items-start justify-center md:items-center md:justify-start px-6 md:py-20 pt-[8vh] md:pt-0">
        <div className="max-w-3xl md:max-w-6xl pl-0 md:pl-12 space-y-12 mx-auto md:mx-0 text-center md:text-left">
          <div
            className={cn(
              "transition-all duration-1000 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif tracking-tight text-balance mb-6 text-[#352E37]">
              Musa
              <br />
              <span className="italic">Qureshi</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-[#8691A1]">
              Solving real problems with code.
            </p>
          </div>

          <div
            className={cn(
              "flex flex-row flex-wrap items-center gap-4 justify-center md:justify-start transition-all duration-1000 delay-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <Button
              size="lg"
              className="text-lg px-6 py-4 rounded-md text-[#f7f3ea]"
              style={{ backgroundColor: "#352E37" }}
              onClick={() => setShowProjects(true)}
            >
              View Projects
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-lg px-6 py-4 rounded-md"
              onClick={() => setShowAbout(true)}
            >
              About Me →
            </Button>
          </div>

          {/* Quick contact link */}
          <div className={cn("transition-all duration-1000 delay-700", isVisible ? "opacity-100" : "opacity-0")}>
            <button
              onClick={() => setShowContact(true)}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm text-[#8691A1]"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      <Dialog open={showProjects} onOpenChange={setShowProjects}>
        <DialogContent className="max-w-5xl">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-3xl sm:text-4xl font-serif tracking-tight">Selected Work</DialogTitle>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            {/* Project 1 */}
            <div className="space-y-2 pb-6 border-b border-border/50">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-xl sm:text-2xl font-serif">Daily Language Practice</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    A collection of daily puzzles for language learners, blending crossword and Wordle.
                  </p>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">2025</span>
              </div>
              <div className="flex gap-2 mt-2 mb-4 items-center">
                <a
                  href="https://kalimle.akililabs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic font-serif p-0 text-current hover:underline hover:bg-transparent leading-none inline"
                >
                  Visit Kalimle
                </a>
                <a
                  href="https://sozle.akililabs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic font-serif p-0 text-current hover:underline hover:bg-transparent leading-none inline"
                >
                  Visit Sözle
                </a>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs px-2.5 py-1 bg-accent/50 text-accent-foreground rounded-md">FastAPI</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="space-y-2 pb-6 border-b border-border/50">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-xl sm:text-2xl font-serif">My Arabic Learner</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Full-stack web app dedicated to Arabic language learning. Built with Flask and ReactJS.
                  </p>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">2024</span>
              </div>
              <div className="flex gap-2 mt-2 mb-4 items-center">
                <a
                  href="https://www.myarabiclearner.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic font-serif p-0 text-current hover:underline hover:bg-transparent leading-none inline"
                >
                  Visit My Arabic Learner
                </a>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs px-2.5 py-1 bg-accent/50 text-accent-foreground rounded-md">Flask</span>
                <span className="text-xs px-2.5 py-1 bg-accent/50 text-accent-foreground rounded-md">ReactJS</span>
                <span className="text-xs px-2.5 py-1 bg-accent/50 text-accent-foreground rounded-md">MySQL</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="space-y-2 pb-6 border-b border-border/50">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-xl sm:text-2xl font-serif">Asma Ul Husna</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    A iOS mobile app that helps users learn and memorise the 99 names of God.
                  </p>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">2024</span>
              </div>
              <div className="flex gap-2 mt-2 mb-4 items-center">
                <a
                  href="https://asmaulhusna.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic font-serif p-0 text-current hover:underline hover:bg-transparent leading-none inline"
                >
                  Visit Asma Ul Husna
                </a>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs px-2.5 py-1 bg-accent/50 text-accent-foreground rounded-md">React Native</span>
                <span className="text-xs px-2.5 py-1 bg-accent/50 text-accent-foreground rounded-md">Flask</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-xl sm:text-2xl font-serif">Smart Doorbell for the Visually Impaired</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Final year dissertation project: developing a smart doorbell system that uses Machine Learning on an embedded device to identify visitors.
                  </p>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">2023</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs px-2.5 py-1 bg-accent/50 text-accent-foreground rounded-md">PyTorch</span>
                <span className="text-xs px-2.5 py-1 bg-accent/50 text-accent-foreground rounded-md">OpenCV</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showAbout} onOpenChange={setShowAbout}>
        <DialogContent className="max-w-4xl">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-3xl sm:text-4xl font-serif tracking-tight">About Me</DialogTitle>
          </DialogHeader>

          <div className="space-y-5 mt-2">
            <p className="text-base sm:text-lg leading-relaxed">
              I’m a developer and entrepreneur focused on execution and impact, turning complex problems into
              production-ready systems.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              At Stickee, I've spent the past two years engineering and managing 500+ automated extraction
              agents and led the development of a Google-commissioned AI system for advanced aspect-based
              sentiment analysis. Alongside this, I founded My Arabic Learner, designing and building an
              end-to-end platform that delivers a free, accessible solution for Levantine Arabic through
              interactive tools and a custom English-to-Levantine AI translator.
            </p>

            <div className="pt-4 space-y-3">
              <h3 className="text-xl sm:text-2xl font-serif">Skills & Technologies</h3>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2.5">
                  <h4 className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">Languages</h4>
                  <ul className="space-y-1.5 text-sm">
                    <li>Python</li>
                    <li>TypeScript, JavaScript</li>
                    <li>Java</li>
                    <li>C, C++</li>
                  </ul>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">Libraries & Frameworks</h4>
                  <ul className="space-y-1.5 text-sm">
                    <li>Flask, FastAPI</li>
                    <li>ReactJS, React Native</li>
                    <li>PyTorch, TensorFlow</li>
                    <li>Selenium, ChromeDriver</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <h3 className="text-xl sm:text-2xl font-serif">Focus</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I prioritise execution, ownership and measurable outcomes. I work end-to-end, from system design to
                deployment and iteration - delivering solutions that are technically robust, scalable and
                firmly grounded in real-world applications.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showContact} onOpenChange={setShowContact}>
        <DialogContent className="max-w-3xl">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-3xl sm:text-4xl font-serif tracking-tight">Get in Touch</DialogTitle>
            <DialogDescription className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Let's build something great together.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-5 mt-4">
            <p className="text-sm sm:text-base leading-relaxed">
              I'm always interested in new projects, collaborations, and opportunities. Whether you have a question, a
              project idea, or just want to connect, feel free to reach out.
            </p>

            <div className="space-y-3 pt-2">
              {/* <div className="flex items-center gap-4 p-4 bg-accent/30 rounded-md hover:bg-accent/50 transition-colors">
                <div className="w-12 h-12 rounded-md bg-foreground/5 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:hello@example.com" className="text-lg hover:text-accent-color transition-colors">
                    hello@example.com
                  </a>
                </div>
              </div> */}

              <div className="flex items-center gap-4 p-4 bg-accent/30 rounded-md hover:bg-accent/50 transition-colors">
                <div className="w-12 h-12 rounded-md bg-foreground/5 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/musa-qureshi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-accent-color transition-colors"
                  >
                    /in/musa-qureshi
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-accent/30 rounded-md hover:bg-accent/50 transition-colors">
                <div className="w-12 h-12 rounded-md bg-foreground/5 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a
                    href="https://github.com/musa-q"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-accent-color transition-colors"
                  >
                    @musa-q
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Available for freelance projects and full-time opportunities
              </p>
            </div> */}
          </div>
        </DialogContent>
      </Dialog>

      <footer className="fixed bottom-0 left-0 right-0 border-t border-[#e6e1d6] bg-[#f7f3ea] py-6 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-muted-foreground">
          <p></p>
          <div className="flex gap-6">
            <button onClick={() => setShowProjects(true)} className="hover:text-foreground transition-colors">
              Projects
            </button>
            <button onClick={() => setShowAbout(true)} className="hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => setShowContact(true)} className="hover:text-foreground transition-colors">
              Contact
            </button>
          </div>
        </div>
      </footer>
    </main>
  )
}
