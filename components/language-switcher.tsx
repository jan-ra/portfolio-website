"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Language = {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
]

export function LanguageSwitcher() {
  const [language, setLanguage] = React.useState<Language>(languages[0])
  const [open, setOpen] = React.useState(false)

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    setOpen(false)
    // In a real app, you would implement language switching logic here
    // For example: i18n.changeLanguage(newLanguage.code)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="w-9 h-9 rounded-full">
          <span className="sr-only">Change language</span>
          <span aria-hidden="true">{language.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang)}
            className={cn("flex items-center gap-2 cursor-pointer", language.code === lang.code && "font-medium")}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
            {language.code === lang.code && <Check className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

