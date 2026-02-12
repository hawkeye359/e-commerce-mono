This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
assets/
  51UDEzMJVpL._AC_UL640_QL65_ML3_t.png
  61IBBVJvSDL._AC_SY879_t.png
  61sbMiUnoGL._AC_UL640_QL65_ML3_t.png
  61U7T1koQqL._AC_SX679_t.png
  71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png
  71li-ujtlUL._AC_UX679_t.png
  71pWzhdJNwL._AC_UL640_QL65_ML3_t.png
  71YAIFU48IL._AC_UL640_QL65_ML3_t.png
  71YXzeOuslL._AC_UY879_t.png
  81fPKd-2AYL._AC_SL1500_t.png
public/
  favicon.ico
  logo.png
  manifest.json
  robots.txt
src/
  components/
    ui/
      button.tsx
      card.tsx
      carousel.tsx
      checkbox.tsx
      dialog.tsx
      field.tsx
      header.tsx
      input.tsx
      label.tsx
      select.tsx
      separator.tsx
      sonner.tsx
      table.tsx
      textarea.tsx
  features/
    admin/
      catalogue/
        product/
          components/
            admin-product-list-view.tsx
          controllers/
            use-admin-product-list.ts
            use-create-product.ts
            use-delete-product.ts
            use-image-upload-store.ts
            use-update-product.ts
          screens/
            create-product.tsx
            product-list.tsx
            update-product.tsx
    catalogue/
      components/
        product-item.tsx
      controllers/
        use-product-catalogue.controller.ts
      screens/
        product-listing-screen.tsx
  lib/
    utils.ts
  routes/
    _authenticated/
      admin/
        product/
          update/
            $productId/
              index.tsx
          index.tsx
        index.tsx
        route.tsx
      route.tsx
    products/
      index.tsx
    __root.tsx
    index.tsx
  services/
    admin/
      catalogue/
        create-product.service.ts
        delete-product.service.ts
        get-product-details.service.ts
        get-product-list.service.ts
        update-prodct.service.ts
    catalogue/
      get-product-list.service.ts
  utils/
    api-client.ts
    query-client.ts
    result.ts
    uploadthing.ts
  gloabal.css
  main.tsx
  reportWebVitals.ts
  routeTree.gen.ts
.cta.json
.gitignore
.prettierignore
components.json
data.json
eslint.config.js
index.html
package.json
prettier.config.js
PROJECT_README.MD
README.md
tsconfig.json
vite.config.ts
```

# Files

## File: public/manifest.json
````json
{
  "short_name": "TanStack App",
  "name": "Create TanStack App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
````

## File: public/robots.txt
````
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:
````

## File: src/components/ui/button.tsx
````typescript
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-xs/relaxed font-medium focus-visible:ring-2 aria-invalid:ring-2 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none cursor-pointer",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/80',
        outline:
          'border-border dark:bg-input/30 hover:bg-input/50 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
        ghost:
          'hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground',
        destructive:
          'bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default:
          "h-7 gap-1 px-2 text-xs/relaxed has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        xs: "h-5 gap-1 rounded-sm px-2 text-[0.625rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-2.5",
        sm: "h-6 gap-1 px-2 text-xs/relaxed has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        lg: "h-8 gap-1 px-2.5 text-xs/relaxed has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-4",
        icon: "size-7 [&_svg:not([class*='size-'])]:size-3.5",
        'icon-xs': "size-5 rounded-sm [&_svg:not([class*='size-'])]:size-2.5",
        'icon-sm': "size-6 [&_svg:not([class*='size-'])]:size-3",
        'icon-lg': "size-8 [&_svg:not([class*='size-'])]:size-4",
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : 'button'

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
````

## File: src/components/ui/card.tsx
````typescript
import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn("ring-foreground/10 bg-card text-card-foreground gap-4 overflow-hidden rounded-lg py-4 text-xs/relaxed ring-1 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 *:[img:first-child]:rounded-t-lg *:[img:last-child]:rounded-b-lg group/card flex flex-col", className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "gap-1 rounded-t-lg px-4 group-data-[size=sm]/card:px-3 [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3 group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-sm font-medium", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-xs/relaxed", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-4 group-data-[size=sm]/card:px-3", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("rounded-b-lg px-4 group-data-[size=sm]/card:px-3 [.border-t]:pt-4 group-data-[size=sm]/card:[.border-t]:pt-3 flex items-center", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
````

## File: src/components/ui/carousel.tsx
````typescript
import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext]
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "rounded-full absolute touch-manipulation",
        orientation === "horizontal"
          ? "top-1/2 -left-12 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "rounded-full absolute touch-manipulation",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRightIcon />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarousel,
}
````

## File: src/components/ui/checkbox.tsx
````typescript
import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { CheckIcon } from "lucide-react"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-[4px] border transition-shadow group-has-disabled/field:opacity-50 focus-visible:ring-2 aria-invalid:ring-2 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="[&>svg]:size-3.5 grid place-content-center text-current transition-none"
      >
        <CheckIcon
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
````

## File: src/components/ui/dialog.tsx
````typescript
import { Dialog as DialogPrimitive } from 'radix-ui';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { XIcon } from 'lucide-react';

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        'data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/80 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-1000',
        className,
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          'bg-gray-600 data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 ring-foreground/10 grid max-w-[calc(100%-2rem)] gap-4 rounded-xl p-4 text-xs/relaxed ring-1 duration-100 sm:max-w-sm fixed top-1/2 left-1/2 z-1000 w-full -translate-x-1/2 -translate-y-1/2 outline-none',
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close data-slot="dialog-close" asChild>
            <Button
              variant="ghost"
              className="absolute top-2 right-2"
              size="icon-sm"
            >
              <XIcon />
              <span className="sr-only">Close</span>
            </Button>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn('gap-1 flex flex-col', className)}
      {...props}
    />
  );
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  showCloseButton?: boolean;
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className,
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close asChild>
          <Button variant="outline">Close</Button>
        </DialogPrimitive.Close>
      )}
    </div>
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn('text-sm font-medium', className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        'text-muted-foreground *:[a]:hover:text-foreground text-xs/relaxed *:[a]:underline *:[a]:underline-offset-3',
        className,
      )}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
````

## File: src/components/ui/field.tsx
````typescript
import { useMemo } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn("gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3 flex flex-col", className)}
      {...props}
    />
  )
}

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn("mb-2 font-medium data-[variant=label]:text-xs/relaxed data-[variant=legend]:text-sm", className)}
      {...props}
    />
  )
}

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "gap-4 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 group/field-group @container/field-group flex w-full flex-col",
        className
      )}
      {...props}
    />
  )
}

const fieldVariants = cva("data-[invalid=true]:text-destructive gap-2 group/field flex w-full", {
  variants: {
    orientation: {
      vertical:
        "flex-col *:w-full [&>.sr-only]:w-auto",
      horizontal:
        "flex-row items-center *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      responsive:
        "flex-col *:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:*:data-[slot=field-label]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
})

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "gap-0.5 group/field-content flex flex-1 flex-col leading-snug",
        className
      )}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "has-data-checked:bg-primary/5 dark:has-data-checked:bg-primary/10 gap-2 group-data-[disabled=true]/field:opacity-50 has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border *:data-[slot=field]:p-2 group/field-label peer/field-label flex w-fit leading-snug",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function FieldTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        "gap-2 text-xs/relaxed font-medium group-data-[disabled=true]/field:opacity-50 flex w-fit items-center leading-snug",
        className
      )}
      {...props}
    />
  )
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "text-muted-foreground text-left text-xs/relaxed [[data-variant=legend]+&]:-mt-1.5 leading-normal font-normal group-has-data-horizontal/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
  )
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children?: React.ReactNode
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn("-my-2 h-5 text-xs/relaxed group-data-[variant=outline]/field-group:-mb-2 relative", className)}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="text-muted-foreground px-2 bg-background relative mx-auto block w-fit"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  )
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ]

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("text-destructive text-xs/relaxed font-normal", className)}
      {...props}
    >
      {content}
    </div>
  )
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
}
````

## File: src/components/ui/header.tsx
````typescript
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';

export const Header = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <header
      className={cn(
        'bg-gray-800 text-white h-16 flex items-center px-4 justify-between absolute w-full z-100',
        className,
      )}
      {...props}
    >
      <Link to="/">
        <h1 className="text-xl font-bold">ShopGood</h1>
      </Link>

      <Link to="/admin/product">Admin Dashboard</Link>
    </header>
  );
};
````

## File: src/components/ui/input.tsx
````typescript
import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "bg-input/20 dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-7 rounded-md border px-2 py-0.5 text-sm transition-colors file:h-6 file:text-xs/relaxed file:font-medium focus-visible:ring-2 aria-invalid:ring-2 md:text-xs/relaxed file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
````

## File: src/components/ui/label.tsx
````typescript
import * as React from "react"
import { Label as LabelPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "gap-2 text-xs/relaxed leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  )
}

export { Label }
````

## File: src/components/ui/select.tsx
````typescript
import * as React from "react"
import { Select as SelectPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from "lucide-react"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("scroll-my-1 p-1", className)}
      {...props}
    />
  )
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-placeholder:text-muted-foreground bg-input/20 dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 gap-1.5 rounded-md border px-2 py-1.5 text-xs/relaxed transition-colors focus-visible:ring-2 aria-invalid:ring-2 data-[size=default]:h-7 data-[size=sm]:h-6 *:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-3.5 flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="text-muted-foreground size-3.5 pointer-events-none" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        data-align-trigger={position === "item-aligned"}
        className={cn("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-32 rounded-lg shadow-md ring-1 duration-100 relative z-50 max-h-(--radix-select-content-available-height) origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto data-[align-trigger=true]:animate-none", position ==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          data-position={position}
          className={cn(
            "data-[position=popper]:h-(--radix-select-trigger-height) data-[position=popper]:w-full data-[position=popper]:min-w-(--radix-select-trigger-width)",
            position === "popper" && ""
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground min-h-7 gap-2 rounded-md px-2 py-1 text-xs/relaxed [&_svg:not([class*='size-'])]:size-3.5 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-full cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute right-2 flex items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="pointer-events-none" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border/50 -mx-1 my-1 h-px pointer-events-none", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn("bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-3.5", className)}
      {...props}
    >
      <ChevronUpIcon
      />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn("bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-3.5", className)}
      {...props}
    >
      <ChevronDownIcon
      />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
````

## File: src/components/ui/separator.tsx
````typescript
"use client"

import * as React from "react"
import { Separator as SeparatorPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
````

## File: src/components/ui/sonner.tsx
````typescript
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-4" />
        ),
        info: (
          <InfoIcon className="size-4" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4" />
        ),
        error: (
          <OctagonXIcon className="size-4" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
````

## File: src/components/ui/table.tsx
````typescript
import * as React from "react"

import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div data-slot="table-container" className="relative w-full overflow-x-auto">
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-xs", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className)}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className)}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0", className)}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0", className)}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-xs", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
````

## File: src/components/ui/textarea.tsx
````typescript
import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input bg-input/20 dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 resize-none rounded-md border px-2 py-2 text-sm transition-colors focus-visible:ring-2 aria-invalid:ring-2 md:text-xs/relaxed placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
````

## File: src/features/admin/catalogue/product/components/admin-product-list-view.tsx
````typescript
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { useDeleteProduct } from '../controllers/use-delete-product';

interface ProductListViewProps {
  id: string;
  title: string;
  description: string;
  price: number;
}

export const columns: ColumnDef<ProductListViewProps>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
];

export const AdminProductList = ({
  products,
}: {
  products: ProductListViewProps[];
}) => {
  const { deleteProduct, isPending } = useDeleteProduct();

  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && 'selected'}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
              <TableCell>
                <Button
                  variant="destructive"
                  disabled={isPending}
                  onClick={() => deleteProduct(row.original.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
````

## File: src/features/admin/catalogue/product/controllers/use-admin-product-list.ts
````typescript
import { getProductListService } from '@/services/admin/catalogue/get-product-list.service';
import { useQuery } from '@tanstack/react-query';

type ProductListView = {
  id: string;
  title: string;
  description: string;
  rating: number;
  images: string[];
  price: number;
};

export const useAdminProductList = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryFn: async function productListQueryFn(): Promise<ProductListView[]> {
      const result = await getProductListService();
      if (!result.success) {
        throw result.error;
      } else {
        return result.data.data;
      }
    },
    queryKey: ['admin', 'product', 'list'],
  });
  return {
    isLoading,
    data,
    isError,
    error,
  };
};
````

## File: src/features/admin/catalogue/product/controllers/use-create-product.ts
````typescript
import { createProductService } from '@/services/admin/catalogue/create-product.service';
import { HOST } from '@/utils/api-client';
import { useForm } from '@tanstack/react-form';
import { useQueryClient } from '@tanstack/react-query';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { genUploader } from 'uploadthing/client';
import * as z from 'zod';
import { useImageStore } from './use-image-upload-store';

export const { uploadFiles } = genUploader({
  url: `${HOST}/uploadthing`,
});

export interface ImageState {
  id: string;
  file: File;
  loading: boolean;
  error: boolean;
  url: string | null;
}

const formValidator = z.object({
  title: z.string(),
  description: z.string(),
  price: z.string(),
});

const checkForUrlErrorInImages = (images: ImageState[]) => {
  for (let i = 0; i < images.length; i++) {
    if (!images[i].url) {
      return true;
    }
  }
  return false;
};

export const useCreateProduct = (onSuccess: () => void) => {
  const { images, replaceImageState, addImages, deleteImage, reset } =
    useImageStore();
  const queryClient = useQueryClient();

  const form = useForm({
    defaultValues: {
      title: '',
      description: '',
      price: '',
    },
    validators: {
      onChange: formValidator,
      onSubmit: formValidator,
    },
    onSubmit: async ({ value }) => {
      if (checkForUrlErrorInImages(images)) {
        toast.error(
          'Erorr in uploading image. delete the images and retry the upload.',
        );
        return;
      }
      const response = await createProductService({
        ...value,
        price: parseFloat(value.price),
        images: images.map((image) => image.url) as string[],
      });
      if (!response.success) {
        toast(response.error.detail);
      }
      toast('Product created successfully');
      onSuccess();

      queryClient.invalidateQueries({
        queryKey: ['admin', 'product', 'list'],
      });
      queryClient.invalidateQueries({
        queryKey: ['product', 'list'],
      });
    },
  });

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  const isImageUploading = (function (): boolean {
    return images.reduce((acc, image) => {
      return acc || image.loading;
    }, false);
  })();

  const isLoading = form.state.isSubmitting || isImageUploading;

  const onClickUploadPhotos = async (recievedImages: File[]) => {
    if (recievedImages) {
      const convertedImages: ImageState[] = recievedImages.map((imageFile) => {
        const id = nanoid();
        uploadFiles('imageUploader', {
          files: [imageFile],
        })
          .then((data) => {
            replaceImageState(id, {
              loading: false,
              url: data[0].ufsUrl,
            });
          })
          .catch(() => {
            replaceImageState(id, {
              loading: false,
              error: true,
            });
          });
        return {
          id,
          file: imageFile,
          loading: true,
          error: false,
          url: null,
        };
      });
      addImages(convertedImages);
    }
  };

  const retryUpload = (image: ImageState) => {
    replaceImageState(image.id, {
      loading: true,
      error: false,
      url: null,
    });
    uploadFiles('imageUploader', {
      files: [image.file],
    })
      .then((data) => {
        replaceImageState(image.id, {
          loading: false,
          url: data[0].ufsUrl,
        });
      })
      .catch(() => {
        replaceImageState(image.id, {
          loading: false,
          error: true,
        });
      });
  };

  return {
    isLoading,
    images,
    onClickUploadPhotos,
    retryUpload,
    deleteImage,
    form,
  };
};
````

## File: src/features/admin/catalogue/product/controllers/use-delete-product.ts
````typescript
import { deleteProductService } from '@/services/admin/catalogue/delete-product.service';
import { queryClient } from '@/utils/query-client';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useDeleteProduct = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: async (id: string) => {
      const result = await deleteProductService(id);
      if (!result.success) {
        throw result.error;
      }
      queryClient.invalidateQueries({
        queryKey: ['admin', 'product', 'list'],
      });
      queryClient.invalidateQueries({
        queryKey: ['product', 'list'],
      });
      return result.data.data;
    },
    onSuccess: () => {
      toast.success('Product deleted successfully');
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return {
    deleteProduct: mutate,
    isPending,
  };
};
````

## File: src/features/admin/catalogue/product/controllers/use-image-upload-store.ts
````typescript
import { create } from 'zustand';

export interface ImageState {
  id: string;
  file: File;
  loading: boolean;
  error: boolean;
  url: string | null;
}
interface CreateProductStoreState {
  images: ImageState[];
  addImages: (images: ImageState[]) => void;
  replaceImageState: (
    id: string,
    state: Partial<Pick<ImageState, 'loading' | 'error' | 'url'>>,
  ) => void;
  deleteImage: (id: string) => void;
  reset: () => void;
}

export const useImageStore = create<CreateProductStoreState>((set) => ({
  images: [],
  title: '',
  description: '',
  price: 0,

  /* status actions */

  createdSuccessfully: () =>
    set({
      images: [],
    }),

  addImages: (newImages) =>
    set((state) => ({
      images: [...state.images, ...newImages],
    })),

  replaceImageState: (id, next) =>
    set((state) => ({
      images: state.images.map((img) =>
        img.id === id ? { ...img, ...next } : img,
      ),
    })),

  deleteImage: (id) =>
    set((state) => ({
      images: state.images.filter((img) => img.id !== id),
    })),

  reset: () =>
    set({
      images: [],
    }),
}));
````

## File: src/features/admin/catalogue/product/controllers/use-update-product.ts
````typescript
import { getProductDetailsService } from '@/services/admin/catalogue/get-product-details.service';
import { updateProductService } from '@/services/admin/catalogue/update-prodct.service';
import { HOST } from '@/utils/api-client';
import { useForm } from '@tanstack/react-form';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { genUploader } from 'uploadthing/client';
import * as z from 'zod';
import { useImageStore, type ImageState } from './use-image-upload-store';

export const { uploadFiles } = genUploader({
  url: `${HOST}/uploadthing`,
});

const formValidator = z.object({
  title: z.string(),
  description: z.string(),
  price: z.string(),
});

const checkForUrlErrorInImages = (images: ImageState[]) => {
  for (let i = 0; i < images.length; i++) {
    if (!images[i].url) {
      return true;
    }
  }
  return false;
};
async function createFilesFromUrls(urls: string[]): Promise<ImageState[]> {
  const allPromises = urls.map(async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch file');
    }

    const blob = await response.blob();

    const file = new File([blob], '', {
      type: blob.type,
    });

    const imageState: ImageState = {
      id: nanoid(),
      file,
      loading: false,
      error: false,
      url,
    };

    return imageState;
  });

  return Promise.all(allPromises);
}

export const useUpdateProduct = (id: string) => {
  const { images, replaceImageState, addImages, deleteImage, reset } =
    useImageStore();

  const queryClient = useQueryClient();

  const {
    data,
    isError,
    error,
    isLoading: isFetchingProductDetails,
  } = useQuery({
    queryKey: ['product', 'details', id],
    queryFn: async () => {
      const result = await getProductDetailsService(id);
      if (!result.success) {
        throw result.error;
      }
      form.reset({
        title: result.data.data.title,
        description: result.data.data.description,
        price: result.data.data.price.toString(),
      });

      console.log(form.state.values);
      const images = await createFilesFromUrls(result.data.data.images);
      addImages(images);

      return result.data.data;
    },
  });

  const form = useForm({
    defaultValues: {
      title: data?.title || '',
      description: data?.description || '',
      price: data?.price.toString() || '',
    },
    validators: {
      onChange: formValidator,
      onSubmit: formValidator,
    },
    onSubmit: async ({ value }) => {
      if (checkForUrlErrorInImages(images)) {
        toast.error(
          'Erorr in uploading image. delete the images and retry the upload.',
        );
        return;
      }
      const response = await updateProductService(id, {
        ...value,
        price: parseFloat(value.price),
        images: images.map((image) => image.url) as string[],
      });
      if (!response.success) {
        toast(response.error.detail);
      }
      queryClient.invalidateQueries({
        queryKey: ['admin', 'product', 'list'],
      });
      queryClient.invalidateQueries({
        queryKey: ['product', 'list'],
      });
    },
  });

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  const isImageUploading = (function (): boolean {
    return images.reduce((acc, image) => {
      return acc || image.loading;
    }, false);
  })();

  const isLoading = form.state.isSubmitting || isImageUploading;

  const onClickUploadPhotos = async (recievedImages: File[]) => {
    if (recievedImages) {
      const convertedImages: ImageState[] = recievedImages.map((imageFile) => {
        const id = nanoid();
        uploadFiles('imageUploader', {
          files: [imageFile],
        })
          .then((data) => {
            replaceImageState(id, {
              loading: false,
              url: data[0].ufsUrl,
            });
          })
          .catch(() => {
            replaceImageState(id, {
              loading: false,
              error: true,
            });
          });
        return {
          id,
          file: imageFile,
          loading: true,
          error: false,
          url: null,
        };
      });
      addImages(convertedImages);
    }
  };

  const retryUpload = (image: ImageState) => {
    replaceImageState(image.id, {
      loading: true,
      error: false,
      url: null,
    });
    uploadFiles('imageUploader', {
      files: [image.file],
    })
      .then((data) => {
        replaceImageState(image.id, {
          loading: false,
          url: data[0].ufsUrl,
        });
      })
      .catch(() => {
        replaceImageState(image.id, {
          loading: false,
          error: true,
        });
      });
  };

  return {
    isFetchingProductDetails,
    isLoading,
    images,
    onClickUploadPhotos,
    retryUpload,
    deleteImage,
    form,
  };
};
````

## File: src/features/admin/catalogue/product/screens/create-product.tsx
````typescript
import { Button } from '@/components/ui/button';
import { DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCreateProduct } from '../controllers/use-create-product';

interface IProps {
  onCloseDialogue: () => void;
}

export const CreateProductForm = ({ onCloseDialogue }: IProps) => {
  const {
    images,
    isLoading,
    onClickUploadPhotos,
    retryUpload,
    deleteImage,
    form,
  } = useCreateProduct(() => {
    onCloseDialogue();
  });

  return (
    <div className="">
      <div className="max-w-md">
        <form
          id="create-product-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <form.Field
                  name="title"
                  children={(field) => (
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                        Product Title
                      </FieldLabel>
                      <Input
                        value={field.state.value}
                        onChange={(e) => {
                          field.handleChange(e.target.value);
                        }}
                        onBlur={field.handleBlur}
                        id="checkout-7j9-card-name-43j"
                        placeholder="Evil Rabbit"
                        required
                      />
                      {field.state.meta.errors.length > 0 && (
                        <p className="text-red-500 text-sm mt-1">
                          {field.state.meta.errors.join(', ')}
                        </p>
                      )}
                    </Field>
                  )}
                ></form.Field>
                <form.Field
                  name="description"
                  children={(field) => (
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                        Product Description
                      </FieldLabel>
                      <Textarea
                        value={field.state.value}
                        onChange={(e) => {
                          field.handleChange(e.target.value);
                        }}
                        onBlur={field.handleBlur}
                        id="checkout-7j9-card-number-uw1"
                        placeholder="Enter product description"
                        required
                      />
                    </Field>
                  )}
                ></form.Field>
              </FieldGroup>
              <FieldGroup>
                <form.Field
                  name="price"
                  children={(field) => (
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                        Product price
                      </FieldLabel>
                      <Input
                        value={field.state.value}
                        onChange={(e) => {
                          field.handleChange(e.target.value);
                        }}
                        onBlur={field.handleBlur}
                        id="checkout-7j9-card-name-43j"
                        placeholder="Evil Rabbit"
                        required
                        type="number"
                      />
                    </Field>
                  )}
                ></form.Field>
              </FieldGroup>
              <FieldGroup>
                {images.map((image) => (
                  <div key={image.id} className="relative">
                    <img
                      src={image.url ?? URL.createObjectURL(image.file)}
                      alt="Uploaded"
                      className="w-32 h-32 object-cover rounded"
                    />
                    {image.loading && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white">Uploading...</span>
                      </div>
                    )}
                    {image.error && (
                      <div className="absolute inset-0 bg-red-500 bg-opacity-50 flex items-center justify-center">
                        <span className="text-white">Upload Failed</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => retryUpload(image)}
                        >
                          Retry
                        </Button>
                      </div>
                    )}
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteImage(image.id)}
                      className="absolute top-1 right-1"
                    >
                      Delete
                    </Button>
                  </div>
                ))}
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                    Product Image
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-name-43j"
                    placeholder="Evil Rabbit"
                    required
                    type="file"
                    multiple
                    onChange={(e) => {
                      onClickUploadPhotos(Array.from(e.target.files ?? []));
                    }}
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>

          <DialogFooter className="mt-4">
            <Button
              onClick={form.handleSubmit}
              form="create-product-form"
              type="submit"
              disabled={isLoading}
            >
              Create Product
            </Button>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </div>
    </div>
  );
};
````

## File: src/features/admin/catalogue/product/screens/product-list.tsx
````typescript
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useAdminProductList } from '../controllers/use-admin-product-list';
import { CreateProductForm } from './create-product';
import { AdminProductList } from '../components/admin-product-list-view';

interface ProductListViewProps {
  id: string;
  title: string;
  description: string;
}

export const ProductListScreen = () => {
  const { isLoading, data, isError, error } = useAdminProductList();
  const [isCreateProductDialogOpen, setIsCreateProductDialogOpen] =
    useState(false);

  const onCreateProductOpenDialogueChange = () => {
    setIsCreateProductDialogOpen((prev) => !prev);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-svh">
        <div className="w-full max-w-md my-20">
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-svh">
        <div className="w-full max-w-md my-20">
          <h1 className="text-2xl font-bold mb-4">Error: {error?.message}</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Product List</h1>
        <Dialog
          open={isCreateProductDialogOpen}
          onOpenChange={setIsCreateProductDialogOpen}
        >
          <form>
            <DialogTrigger asChild>
              <Button variant="default">Create new product +</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>Create new product</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <CreateProductForm
                onCloseDialogue={onCreateProductOpenDialogueChange}
              />
            </DialogContent>
          </form>
        </Dialog>
      </div>
      <AdminProductList products={data || []} />
    </div>
  );
};

export default ProductListScreen;
````

## File: src/features/admin/catalogue/product/screens/update-product.tsx
````typescript
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useUpdateProduct } from '../controllers/use-update-product';

export const UpdateProductScreen = ({ id }: { id: string }) => {
  const {
    isFetchingProductDetails,
    images,
    isLoading,
    onClickUploadPhotos,
    retryUpload,
    deleteImage,
    form,
  } = useUpdateProduct(id);

  if (isFetchingProductDetails) {
    return (
      <div className="flex justify-center items-center min-h-svh">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-svh">
      <div className="w-full max-w-md my-20">
        <form
          id="update-product-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Update Product</FieldLegend>
              <FieldGroup>
                <form.Field
                  name="title"
                  children={(field) => (
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                        Product Title
                      </FieldLabel>
                      <Input
                        value={field.state.value}
                        onChange={(e) => {
                          field.handleChange(e.target.value);
                        }}
                        onBlur={field.handleBlur}
                        id="checkout-7j9-card-name-43j"
                        placeholder="Evil Rabbit"
                        required
                      />
                      {field.state.meta.errors.length > 0 && (
                        <p className="text-red-500 text-sm mt-1">
                          {field.state.meta.errors.join(', ')}
                        </p>
                      )}
                    </Field>
                  )}
                ></form.Field>
                <form.Field
                  name="description"
                  children={(field) => (
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                        Product Description
                      </FieldLabel>
                      <Textarea
                        value={field.state.value}
                        onChange={(e) => {
                          field.handleChange(e.target.value);
                        }}
                        onBlur={field.handleBlur}
                        id="checkout-7j9-card-number-uw1"
                        placeholder="Enter product description"
                        required
                      />
                    </Field>
                  )}
                ></form.Field>
              </FieldGroup>
              <FieldGroup>
                <form.Field
                  name="price"
                  children={(field) => (
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                        Product price
                      </FieldLabel>
                      <Input
                        value={field.state.value}
                        onChange={(e) => {
                          field.handleChange(e.target.value);
                        }}
                        onBlur={field.handleBlur}
                        id="checkout-7j9-card-name-43j"
                        placeholder="Evil Rabbit"
                        required
                        type="number"
                      />
                    </Field>
                  )}
                ></form.Field>
              </FieldGroup>
              <FieldGroup>
                {images.map((image) => (
                  <div key={image.id} className="relative">
                    <img
                      src={image.url ?? URL.createObjectURL(image.file)}
                      alt="Uploaded"
                      className="w-32 h-32 object-cover rounded"
                    />
                    {image.loading && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white">Uploading...</span>
                      </div>
                    )}
                    {image.error && (
                      <div className="absolute inset-0 bg-red-500 bg-opacity-50 flex items-center justify-center">
                        <span className="text-white">Upload Failed</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => retryUpload(image)}
                        >
                          Retry
                        </Button>
                      </div>
                    )}
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteImage(image.id)}
                      className="absolute top-1 right-1"
                    >
                      Delete
                    </Button>
                  </div>
                ))}
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                    Product Image
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-name-43j"
                    placeholder="Evil Rabbit"
                    required
                    type="file"
                    multiple
                    onChange={(e) => {
                      onClickUploadPhotos(Array.from(e.target.files ?? []));
                    }}
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>

          <FieldGroup className="mt-4">
            <Field orientation="horizontal">
              <Button
                onClick={form.handleSubmit}
                form="update-product-form"
                type="submit"
                disabled={isLoading}
              >
                Submit
              </Button>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
};
````

## File: src/features/catalogue/components/product-item.tsx
````typescript
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Heart } from 'lucide-react';
import type { ProductListView } from '../controllers/use-product-catalogue.controller';

export default function ProductItem({
  product,
  addToCart,
}: {
  product: ProductListView;
  addToCart: (id: string) => void;
}) {
  return (
    <Card className="flex-1 justify-between" key={product.id}>
      <CardHeader>
        <Carousel>
          <CarouselContent>
            {product.images.map((image, index) => (
              <CarouselItem>
                <img
                  key={index}
                  src={image}
                  alt={`${product.title} - Image ${index + 1}`}
                  className="w-full h-48 object-contain rounded-t-md"
                />
              </CarouselItem>
            ))}
            <CarouselPrevious></CarouselPrevious>
            <CarouselNext></CarouselNext>
          </CarouselContent>
        </Carousel>
      </CardHeader>
      <CardContent>
        <p className="font-bold text-lg">Price: ${product.price}</p>
        <CardTitle className="mt-2 whitespace-nowrap overflow-hidden text-ellipsis">
          {product.title}
        </CardTitle>
        <CardDescription>{`${product.description.slice(0, 100)}...`}</CardDescription>
        <CardAction className="flex mt-2 items-end justify-between">
          <Button onClick={() => addToCart(product.id)}>Add to Cart</Button>
          <Button variant="outline" onClick={() => addToCart(product.id)}>
            <Heart fill="currentColor" className="w-4 h-4 text-red-500" />
          </Button>
        </CardAction>
      </CardContent>
    </Card>
  );
}
````

## File: src/features/catalogue/controllers/use-product-catalogue.controller.ts
````typescript
import { getProductListService } from '@/services/catalogue/get-product-list.service';
import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';

export interface ProductListView {
  id: string;
  rating: number;
  images: string[];
  title: string;
  price: number;
  description: string;
}

export const useProductListController = () => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['product', 'list'],
    queryFn: async function productListQueryFn(): Promise<ProductListView[]> {
      const result = await getProductListService();

      if (!result.success) {
        throw result.error;
      }
      return result.data.data;
    },
  });

  const addToCart = useCallback((id: string) => {
    // Code for add to cart
  }, []);

  return {
    data,
    isError,
    error,
    isLoading,
    addToCart,
  };
};
````

## File: src/features/catalogue/screens/product-listing-screen.tsx
````typescript
import ProductItem from '../components/product-item';

export interface IProps {
  data?: {
    id: string;
    title: string;
    description: string;
    rating: number;
    images: string[];
    price: number;
  }[];
  addToCart: (productId: string) => void;
}

export const ProductListingScreen = ({ data, addToCart }: IProps) => {
  return (
    <div>
      <h2>Product Catalogue</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4">
        {data?.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};
````

## File: src/lib/utils.ts
````typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
````

## File: src/routes/_authenticated/admin/product/update/$productId/index.tsx
````typescript
import { UpdateProductScreen } from '@/features/admin/catalogue/product/screens/update-product';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/_authenticated/admin/product/update/$productId/',
)({
  component: RouteComponent,
});

function RouteComponent() {
  const id = Route.useParams().productId;
  return <UpdateProductScreen id={id} />;
}
````

## File: src/routes/_authenticated/admin/product/index.tsx
````typescript
import ProductListScreen from '@/features/admin/catalogue/product/screens/product-list';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/_authenticated/admin/product/',
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductListScreen />;
}
````

## File: src/routes/_authenticated/admin/index.tsx
````typescript
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/admin/')({
  component: RouteComponent,
  beforeLoad: () => {
    throw redirect({
      to: '/admin/product',
    });
  },
});

function RouteComponent() {
  return <div>Hello "/_authenticated/admin/"!</div>;
}
````

## File: src/routes/_authenticated/admin/route.tsx
````typescript
import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/admin')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="">
      <div className="w-60 absolute top-0 h-full pt-20 p-4 border-r bg-gray-600">
        <Link
          to="/admin/product"
          className="[&.active]:bg-gray-700 p-2 block mb-2"
        >
          <div className="">
            <p>Products</p>
          </div>
        </Link>
      </div>
      <div className="pl-64 pr-4 pt-20">
        <Outlet />
      </div>
    </div>
  );
}
````

## File: src/routes/_authenticated/route.tsx
````typescript
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: () => {
    const isAuthenticated = true
    if (!isAuthenticated) {
      throw new Error('User is not authenticated')
    }
  },
  component: () => <Outlet />,
})
````

## File: src/routes/products/index.tsx
````typescript
import { useProductListController } from '@/features/catalogue/controllers/use-product-catalogue.controller';
import { ProductListingScreen } from '@/features/catalogue/screens/product-listing-screen';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/products/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { isLoading, data, isError, error, addToCart } =
    useProductListController();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );
  }

  return <ProductListingScreen data={data} addToCart={addToCart} />;
}
````

## File: src/routes/__root.tsx
````typescript
import { TanStackDevtools } from '@tanstack/react-devtools';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';

import { Header } from '@/components/ui/header';
import { Toaster } from '@/components/ui/sonner';
import { queryClient } from '@/utils/query-client';
import { QueryClientProvider } from '@tanstack/react-query';

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <div className="h-svh w-svw">
        <Header />
        <main className="h-full w-full overflow-y-auto">
          <Outlet />
        </main>
      </div>

      <Toaster richColors position="top-center" />
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </QueryClientProvider>
  ),
});
````

## File: src/routes/index.tsx
````typescript
import { createFileRoute, Link, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
  beforeLoad: () => {
    throw redirect({
      to: '/products',
    });
  },
});

function App() {
  return (
    <div className="flex justify-center items-center h-svh flex-col">
      <h1> Welcome to the Product Catalogue</h1>
      <Link to="/products">Go to Products</Link>
      <Link to="/admin">Admin Dashboard</Link>
    </div>
  );
}
````

## File: src/services/admin/catalogue/create-product.service.ts
````typescript
import {
  apiClient,
  type ProblemDetails,
  type ServerProblems,
} from '@/utils/api-client';

type CreateProductServerResponse = {
  id: string;
  title: string;
  description: string;
  rating: number;
  images: string[];
  price: number;
};

export type CreateProductServerPayload = {
  title: string;
  description: string;
  images: string[];
  price: number;
};

interface InvalidParamsProblemDetails extends ProblemDetails<
  typeof ServerProblems.InvalidParams
> {
  errors: {
    message: string;
    path: string;
  }[];
}

type ServiceProblems = InvalidParamsProblemDetails;

export async function createProductService(data: CreateProductServerPayload) {
  const servicePath = '/admin/catalogue/product';
  // return await apiClientMock.get<ProductListServerResponse[], ServiceProblems>(
  //   servicePath,
  //   data,
  // )
  return await apiClient.post<CreateProductServerResponse, ServiceProblems>(
    servicePath,
    data,
  );
}
````

## File: src/services/admin/catalogue/delete-product.service.ts
````typescript
import { apiClient } from '@/utils/api-client';

export async function deleteProductService(id: string) {
  const servicePath = '/admin/catalogue/product/' + id;
  return await apiClient.delete(servicePath);
}
````

## File: src/services/admin/catalogue/get-product-details.service.ts
````typescript
import { apiClient, type ProblemDetails } from '@/utils/api-client';

type GetProductDetailsResponse = {
  id: string;
  title: string;
  description: string;
  rating: number;
  images: string[];
  price: number;
};

export async function getProductDetailsService(id: string) {
  const servicePath = '/admin/catalogue/product/' + id;
  return await apiClient.get<GetProductDetailsResponse, ProblemDetails>(
    servicePath,
  );
}
````

## File: src/services/admin/catalogue/get-product-list.service.ts
````typescript
import { apiClient, type ProblemDetails } from '@/utils/api-client';

type ProductListServerResponse = {
  id: string;
  title: string;
  description: string;
  rating: number;
  images: string[];
  price: number;
};

export async function getProductListService() {
  const servicePath = '/admin/catalogue/product';
  // return await apiClientMock.get<ProductListServerResponse[], ServiceProblems>(
  //   servicePath,
  //   data,
  // )
  return await apiClient.get<ProductListServerResponse[], ProblemDetails>(
    servicePath,
  );
}
````

## File: src/services/admin/catalogue/update-prodct.service.ts
````typescript
import {
  apiClient,
  type ProblemDetails,
  type ServerProblems,
} from '@/utils/api-client';

type UpdateProductServerResponse = {
  id: string;
  title: string;
  description: string;
  rating: number;
  images: string[];
  price: number;
};

export type UpdateProductServerPayload = {
  title: string;
  description: string;
  images: string[];
  price: number;
};

interface InvalidParamsProblemDetails extends ProblemDetails<
  typeof ServerProblems.InvalidParams
> {
  errors: {
    message: string;
    path: string;
  }[];
}

type ServiceProblems = InvalidParamsProblemDetails;

export async function updateProductService(
  id: string,
  data: UpdateProductServerPayload,
) {
  const servicePath = '/admin/catalogue/product/' + id;
  return await apiClient.put<UpdateProductServerResponse, ServiceProblems>(
    servicePath,
    data,
  );
}
````

## File: src/services/catalogue/get-product-list.service.ts
````typescript
import { apiClient, type ProblemDetails } from '@/utils/api-client';

type ProductListServerResponse = {
  id: string;
  title: string;
  description: string;
  rating: number;
  images: string[];
  price: number;
};

export async function getProductListService() {
  const servicePath = '/catalogue/product';
  // return await apiClientMock.get<ProductListServerResponse[], ServiceProblems>(
  //   servicePath,
  //   data,
  // )
  return await apiClient.get<ProductListServerResponse[], ProblemDetails>(
    servicePath,
  );
}
````

## File: src/utils/api-client.ts
````typescript
import { Err, Ok, type Result } from './result';

export const HOST = 'http://localhost:8080/v1';

export interface ProblemDetails<
  TServerProblemType extends ServerProblemType = never,
> {
  readonly type: TServerProblemType | InternalProblemType;
  readonly title: string;
  readonly status: number;
  readonly detail: string;
  readonly instance: string;
}

export const InternalProblems = {
  NetworkError: 'https://example.com/probs/network-error',
  JsonParsingError: 'https://example.com/probs/json-parsing-error',
  UnsupportedContentTypeError:
    'https://example.com/probs/unsupported-content-type',
} as const;

export type InternalProblemType =
  (typeof InternalProblems)[keyof typeof InternalProblems];

export const ServerProblems = {
  ServiceNotAvailable: 'https://example.com/probs/service-not-available',
  InvalidParams: 'https://example.com/probs/invalid-params',
  aboutBlank: 'about:blank',
} as const;

export type ServerProblemType =
  (typeof ServerProblems)[keyof typeof ServerProblems];

const NetworkError: ProblemDetails = {
  type: InternalProblems.NetworkError,
  title: 'Network Error',
  status: 0,
  detail: 'A network error occurred while trying to fetch data.',
  instance: '',
};

const JsonParsingError: ProblemDetails = {
  type: InternalProblems.JsonParsingError,
  title: 'JSON Parsing Error',
  status: 0,
  detail: 'An error occurred while parsing the JSON response.',
  instance: '',
};

const UnsupportedContentTypeError: ProblemDetails = {
  type: InternalProblems.UnsupportedContentTypeError,
  title: 'Unsupported Content Type',
  status: 0,
  detail: 'The response content type is not supported.',
  instance: '',
};

interface SuccessAPIResponse<TData, TMeta = null> {
  data: TData;
  meta: TMeta;
}

interface ErrorAPIResponse<E extends ProblemDetails<ServerProblemType>> {
  error: E;
}

// The following type is supposed be decided after the discussion with the backend team
export type APIResponse<
  T,
  E extends ProblemDetails<ServerProblemType>,
  Meta = null,
> = SuccessAPIResponse<T, Meta> | ErrorAPIResponse<E>;

export const apiClient = {
  get: async <
    TDataType,
    E extends ProblemDetails<ServerProblemType>,
    Meta = null,
  >(
    url: string,
  ): Promise<
    Result<SuccessAPIResponse<TDataType, Meta>, E | ProblemDetails>
  > => {
    const defaultHeaders = new Headers({
      Accept: 'application/json, application/problem+json, */*',
    });

    try {
      const response = await fetch(`${HOST}${url}`, {
        headers: defaultHeaders,
      });

      if (!response.headers.get('Content-Type')?.includes('application/json')) {
        return Err(UnsupportedContentTypeError);
      }

      try {
        const data: APIResponse<TDataType, E, Meta> = await response.json();
        if (response.ok) {
          let successData = data as SuccessAPIResponse<TDataType, Meta>;
          return Ok({
            data: successData.data,
            meta: successData.meta,
          });
        } else {
          let errorData = data as ErrorAPIResponse<E>;
          return Err(errorData.error);
        }
      } catch (error) {
        return Err(JsonParsingError);
      }
    } catch (e) {
      return Err(NetworkError);
    }
  },
  post: async <
    TDataType,
    E extends ProblemDetails<ServerProblemType>,
    Meta = null,
  >(
    url: string,
    data: Record<string, unknown>,
  ): Promise<
    Result<SuccessAPIResponse<TDataType, Meta>, E | ProblemDetails>
  > => {
    const defaultHeaders = new Headers({
      Accept: 'application/json, application/problem+json, */*',
      'Content-type': 'application/json',
    });

    try {
      const response = await fetch(`${HOST}${url}`, {
        method: 'post',
        headers: defaultHeaders,
        body: JSON.stringify(data),
      });

      if (!response.headers.get('Content-Type')?.includes('application/json')) {
        return Err(UnsupportedContentTypeError);
      }

      try {
        const data: APIResponse<TDataType, E, Meta> = await response.json();
        if (response.ok) {
          let successData = data as SuccessAPIResponse<TDataType, Meta>;
          return Ok({
            data: successData.data,
            meta: successData.meta,
          });
        } else {
          let errorData = data as ErrorAPIResponse<E>;
          return Err(errorData.error);
        }
      } catch (error) {
        return Err(JsonParsingError);
      }
    } catch (e) {
      return Err(NetworkError);
    }
  },
  put: async <
    TDataType,
    E extends ProblemDetails<ServerProblemType>,
    Meta = null,
  >(
    url: string,
    data: Record<string, unknown>,
  ): Promise<
    Result<SuccessAPIResponse<TDataType, Meta>, E | ProblemDetails>
  > => {
    const defaultHeaders = new Headers({
      Accept: 'application/json, application/problem+json, */*',
      'Content-type': 'application/json',
    });

    try {
      const response = await fetch(`${HOST}${url}`, {
        method: 'put',
        headers: defaultHeaders,
        body: JSON.stringify(data),
      });

      if (!response.headers.get('Content-Type')?.includes('application/json')) {
        return Err(UnsupportedContentTypeError);
      }

      try {
        const data: APIResponse<TDataType, E, Meta> = await response.json();
        if (response.ok) {
          let successData = data as SuccessAPIResponse<TDataType, Meta>;
          return Ok({
            data: successData.data,
            meta: successData.meta,
          });
        } else {
          let errorData = data as ErrorAPIResponse<E>;
          return Err(errorData.error);
        }
      } catch (error) {
        return Err(JsonParsingError);
      }
    } catch (e) {
      return Err(NetworkError);
    }
  },
  delete: async <
    TDataType,
    E extends ProblemDetails<ServerProblemType>,
    Meta = null,
  >(
    url: string,
  ): Promise<
    Result<SuccessAPIResponse<TDataType, Meta>, E | ProblemDetails>
  > => {
    const defaultHeaders = new Headers({
      Accept: 'application/json, application/problem+json, */*',
      'Content-type': 'application/json',
    });

    try {
      const response = await fetch(`${HOST}${url}`, {
        method: 'delete',
        headers: defaultHeaders,
      });

      if (!response.headers.get('Content-Type')?.includes('application/json')) {
        return Err(UnsupportedContentTypeError);
      }

      try {
        const data: APIResponse<TDataType, E, Meta> = await response.json();
        if (response.ok) {
          let successData = data as SuccessAPIResponse<TDataType, Meta>;
          return Ok({
            data: successData.data,
            meta: successData.meta,
          });
        } else {
          let errorData = data as ErrorAPIResponse<E>;
          return Err(errorData.error);
        }
      } catch (error) {
        return Err(JsonParsingError);
      }
    } catch (e) {
      return Err(NetworkError);
    }
  },
};

export const apiClientMock = {
  get: async <
    TDataType,
    E extends ProblemDetails<ServerProblemType>,
    Meta extends Record<string, unknown> | undefined = undefined,
  >(
    _url: string,
    data: TDataType,
    meta?: Meta,
  ): Promise<
    Result<SuccessAPIResponse<TDataType, Meta>, E | ProblemDetails>
  > => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Ok({ data, meta: meta as Meta }));
      }, 1000);
    });
  },
};
````

## File: src/utils/query-client.ts
````typescript
import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient()
````

## File: src/utils/result.ts
````typescript
export type Result<T, E = Error> =
  | { success: true; data: T }
  | { success: false; error: E }

export const Ok = <T>(data: T): Result<T, never> => ({ success: true, data })

export const Err = <E = Error>(error: E): Result<never, E> => ({
  success: false,
  error,
})
````

## File: src/utils/uploadthing.ts
````typescript
import { generateUploadButton } from '@uploadthing/react'
import { HOST } from './api-client'

export const UploadButton = generateUploadButton({
  url: `${HOST}/v1/uploadthing`,
})
````

## File: src/gloabal.css
````css
@import 'tailwindcss';
@import 'tw-animate-css';
@import 'shadcn/tailwind.css';
@import '@fontsource-variable/outfit';
@import 'uploadthing/tw/v4';
@source "../node_modules/@uploadthing/react/dist";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.13 0.028 261.692);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.13 0.028 261.692);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.13 0.028 261.692);
  --primary: oklch(0.21 0.034 264.665);
  --primary-foreground: oklch(0.985 0.002 247.839);
  --secondary: oklch(0.967 0.003 264.542);
  --secondary-foreground: oklch(0.21 0.034 264.665);
  --muted: oklch(0.967 0.003 264.542);
  --muted-foreground: oklch(0.551 0.027 264.364);
  --accent: oklch(0.967 0.003 264.542);
  --accent-foreground: oklch(0.21 0.034 264.665);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.928 0.006 264.531);
  --input: oklch(0.928 0.006 264.531);
  --ring: oklch(0.707 0.022 261.325);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0;
  --sidebar: oklch(0.985 0.002 247.839);
  --sidebar-foreground: oklch(0.13 0.028 261.692);
  --sidebar-primary: oklch(0.21 0.034 264.665);
  --sidebar-primary-foreground: oklch(0.985 0.002 247.839);
  --sidebar-accent: oklch(0.967 0.003 264.542);
  --sidebar-accent-foreground: oklch(0.21 0.034 264.665);
  --sidebar-border: oklch(0.928 0.006 264.531);
  --sidebar-ring: oklch(0.707 0.022 261.325);
}

.dark {
  --background: oklch(0.13 0.028 261.692);
  --foreground: oklch(0.985 0.002 247.839);
  --card: oklch(0.21 0.034 264.665);
  --card-foreground: oklch(0.985 0.002 247.839);
  --popover: oklch(0.21 0.034 264.665);
  --popover-foreground: oklch(0.985 0.002 247.839);
  --primary: oklch(0.928 0.006 264.531);
  --primary-foreground: oklch(0.21 0.034 264.665);
  --secondary: oklch(0.278 0.033 256.848);
  --secondary-foreground: oklch(0.985 0.002 247.839);
  --muted: oklch(0.278 0.033 256.848);
  --muted-foreground: oklch(0.707 0.022 261.325);
  --accent: oklch(0.278 0.033 256.848);
  --accent-foreground: oklch(0.985 0.002 247.839);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.551 0.027 264.364);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.21 0.034 264.665);
  --sidebar-foreground: oklch(0.985 0.002 247.839);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0.002 247.839);
  --sidebar-accent: oklch(0.278 0.033 256.848);
  --sidebar-accent-foreground: oklch(0.985 0.002 247.839);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.551 0.027 264.364);
}

@theme inline {
  --font-sans: 'Outfit Variable', sans-serif;
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-background: var(--background);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);
}

body {
  margin: 0;
  padding: 0;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply font-sans bg-background text-foreground;
  }
  html {
    @apply font-sans;
  }
}
````

## File: src/main.tsx
````typescript
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

import './gloabal.css'
import reportWebVitals from './reportWebVitals.ts'

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
````

## File: src/reportWebVitals.ts
````typescript
const reportWebVitals = (onPerfEntry?: () => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry)
      onINP(onPerfEntry)
      onFCP(onPerfEntry)
      onLCP(onPerfEntry)
      onTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
````

## File: src/routeTree.gen.ts
````typescript
/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as AuthenticatedRouteRouteImport } from './routes/_authenticated/route'
import { Route as IndexRouteImport } from './routes/index'
import { Route as ProductsIndexRouteImport } from './routes/products/index'
import { Route as AuthenticatedAdminRouteRouteImport } from './routes/_authenticated/admin/route'
import { Route as AuthenticatedAdminIndexRouteImport } from './routes/_authenticated/admin/index'
import { Route as AuthenticatedAdminProductIndexRouteImport } from './routes/_authenticated/admin/product/index'
import { Route as AuthenticatedAdminProductUpdateProductIdIndexRouteImport } from './routes/_authenticated/admin/product/update/$productId/index'

const AuthenticatedRouteRoute = AuthenticatedRouteRouteImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const ProductsIndexRoute = ProductsIndexRouteImport.update({
  id: '/products/',
  path: '/products/',
  getParentRoute: () => rootRouteImport,
} as any)
const AuthenticatedAdminRouteRoute = AuthenticatedAdminRouteRouteImport.update({
  id: '/admin',
  path: '/admin',
  getParentRoute: () => AuthenticatedRouteRoute,
} as any)
const AuthenticatedAdminIndexRoute = AuthenticatedAdminIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthenticatedAdminRouteRoute,
} as any)
const AuthenticatedAdminProductIndexRoute =
  AuthenticatedAdminProductIndexRouteImport.update({
    id: '/product/',
    path: '/product/',
    getParentRoute: () => AuthenticatedAdminRouteRoute,
  } as any)
const AuthenticatedAdminProductUpdateProductIdIndexRoute =
  AuthenticatedAdminProductUpdateProductIdIndexRouteImport.update({
    id: '/product/update/$productId/',
    path: '/product/update/$productId/',
    getParentRoute: () => AuthenticatedAdminRouteRoute,
  } as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/admin': typeof AuthenticatedAdminRouteRouteWithChildren
  '/products/': typeof ProductsIndexRoute
  '/admin/': typeof AuthenticatedAdminIndexRoute
  '/admin/product/': typeof AuthenticatedAdminProductIndexRoute
  '/admin/product/update/$productId/': typeof AuthenticatedAdminProductUpdateProductIdIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/products': typeof ProductsIndexRoute
  '/admin': typeof AuthenticatedAdminIndexRoute
  '/admin/product': typeof AuthenticatedAdminProductIndexRoute
  '/admin/product/update/$productId': typeof AuthenticatedAdminProductUpdateProductIdIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/_authenticated': typeof AuthenticatedRouteRouteWithChildren
  '/_authenticated/admin': typeof AuthenticatedAdminRouteRouteWithChildren
  '/products/': typeof ProductsIndexRoute
  '/_authenticated/admin/': typeof AuthenticatedAdminIndexRoute
  '/_authenticated/admin/product/': typeof AuthenticatedAdminProductIndexRoute
  '/_authenticated/admin/product/update/$productId/': typeof AuthenticatedAdminProductUpdateProductIdIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/admin'
    | '/products/'
    | '/admin/'
    | '/admin/product/'
    | '/admin/product/update/$productId/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/products'
    | '/admin'
    | '/admin/product'
    | '/admin/product/update/$productId'
  id:
    | '__root__'
    | '/'
    | '/_authenticated'
    | '/_authenticated/admin'
    | '/products/'
    | '/_authenticated/admin/'
    | '/_authenticated/admin/product/'
    | '/_authenticated/admin/product/update/$productId/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthenticatedRouteRoute: typeof AuthenticatedRouteRouteWithChildren
  ProductsIndexRoute: typeof ProductsIndexRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: '/'
      preLoaderRoute: typeof AuthenticatedRouteRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/products/': {
      id: '/products/'
      path: '/products'
      fullPath: '/products/'
      preLoaderRoute: typeof ProductsIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/_authenticated/admin': {
      id: '/_authenticated/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AuthenticatedAdminRouteRouteImport
      parentRoute: typeof AuthenticatedRouteRoute
    }
    '/_authenticated/admin/': {
      id: '/_authenticated/admin/'
      path: '/'
      fullPath: '/admin/'
      preLoaderRoute: typeof AuthenticatedAdminIndexRouteImport
      parentRoute: typeof AuthenticatedAdminRouteRoute
    }
    '/_authenticated/admin/product/': {
      id: '/_authenticated/admin/product/'
      path: '/product'
      fullPath: '/admin/product/'
      preLoaderRoute: typeof AuthenticatedAdminProductIndexRouteImport
      parentRoute: typeof AuthenticatedAdminRouteRoute
    }
    '/_authenticated/admin/product/update/$productId/': {
      id: '/_authenticated/admin/product/update/$productId/'
      path: '/product/update/$productId'
      fullPath: '/admin/product/update/$productId/'
      preLoaderRoute: typeof AuthenticatedAdminProductUpdateProductIdIndexRouteImport
      parentRoute: typeof AuthenticatedAdminRouteRoute
    }
  }
}

interface AuthenticatedAdminRouteRouteChildren {
  AuthenticatedAdminIndexRoute: typeof AuthenticatedAdminIndexRoute
  AuthenticatedAdminProductIndexRoute: typeof AuthenticatedAdminProductIndexRoute
  AuthenticatedAdminProductUpdateProductIdIndexRoute: typeof AuthenticatedAdminProductUpdateProductIdIndexRoute
}

const AuthenticatedAdminRouteRouteChildren: AuthenticatedAdminRouteRouteChildren =
  {
    AuthenticatedAdminIndexRoute: AuthenticatedAdminIndexRoute,
    AuthenticatedAdminProductIndexRoute: AuthenticatedAdminProductIndexRoute,
    AuthenticatedAdminProductUpdateProductIdIndexRoute:
      AuthenticatedAdminProductUpdateProductIdIndexRoute,
  }

const AuthenticatedAdminRouteRouteWithChildren =
  AuthenticatedAdminRouteRoute._addFileChildren(
    AuthenticatedAdminRouteRouteChildren,
  )

interface AuthenticatedRouteRouteChildren {
  AuthenticatedAdminRouteRoute: typeof AuthenticatedAdminRouteRouteWithChildren
}

const AuthenticatedRouteRouteChildren: AuthenticatedRouteRouteChildren = {
  AuthenticatedAdminRouteRoute: AuthenticatedAdminRouteRouteWithChildren,
}

const AuthenticatedRouteRouteWithChildren =
  AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren)

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
  ProductsIndexRoute: ProductsIndexRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
````

## File: .cta.json
````json
{
  "projectName": "full-stack",
  "mode": "file-router",
  "typescript": true,
  "packageManager": "pnpm",
  "tailwind": true,
  "addOnOptions": {},
  "git": true,
  "version": 1,
  "framework": "react-cra",
  "chosenAddOns": [
    "eslint"
  ]
}
````

## File: .gitignore
````
node_modules
.DS_Store
dist
dist-ssr
*.local
count.txt
.env
.nitro
.tanstack
.wrangler
````

## File: .prettierignore
````
package-lock.json
pnpm-lock.yaml
yarn.lock
````

## File: components.json
````json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "radix-mira",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/globals.css",
    "baseColor": "gray",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "rtl": false,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "menuColor": "default",
  "menuAccent": "subtle",
  "registries": {}
}
````

## File: data.json
````json
[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "./assets/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": 3.9
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "./assets/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    "rating": 4.1
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "./assets/71li-ujtlUL._AC_UX679_t.png",
    "rating": 4.7
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "./assets/71YXzeOuslL._AC_UY879_t.png",
    "rating": 2.1
  },
  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "./assets/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    "rating": 4.6
  },
  {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "./assets/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    "rating": 3.9
  },
  {
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "category": "jewelery",
    "image": "./assets/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    "rating": 3
  },
  {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "jewelery",
    "image": "./assets/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    "rating": 1.9
  },
  {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "electronics",
    "image": "./assets/61IBBVJvSDL._AC_SY879_t.png",
    "rating": 3.3
  },
  {
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "category": "electronics",
    "image": "./assets/61U7T1koQqL._AC_SX679_t.png",
    "rating": 2.9
  }
]
````

## File: eslint.config.js
````javascript
//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'

export default [...tanstackConfig]
````

## File: index.html
````html
<!doctype html>
<html class="dark" lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-tsrouter-app"
    />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />
    <title>Create TanStack App - full-stack</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
````

## File: package.json
````json
{
  "name": "@repo/frontend",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite --port 3000",
    "build": "vite build && tsc",
    "preview": "vite preview",
    "test": "vitest run",
    "lint": "eslint",
    "format": "prettier",
    "check": "prettier --write . && eslint --fix"
  },
  "dependencies": {
    "@fontsource-variable/outfit": "^5.2.8",
    "@tailwindcss/vite": "^4.0.6",
    "@tanstack/react-devtools": "^0.7.0",
    "@tanstack/react-form": "^1.28.0",
    "@tanstack/react-query": "^5.90.20",
    "@tanstack/react-router": "^1.132.0",
    "@tanstack/react-router-devtools": "^1.132.0",
    "@tanstack/react-table": "^8.21.3",
    "@tanstack/router-plugin": "^1.132.0",
    "@uploadthing/react": "^7.3.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "embla-carousel-react": "^8.6.0",
    "lucide-react": "^0.545.0",
    "nanoid": "^5.1.6",
    "next-themes": "^0.4.6",
    "nitro": "3.0.1-alpha.2",
    "radix-ui": "^1.4.3",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "shadcn": "^3.8.4",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.4.0",
    "tailwindcss": "^4.0.6",
    "tw-animate-css": "^1.4.0",
    "uploadthing": "^7.7.4",
    "zod": "^4.3.6",
    "zustand": "^5.0.11"
  },
  "devDependencies": {
    "@tanstack/devtools-vite": "^0.3.11",
    "@tanstack/eslint-config": "^0.3.0",
    "@testing-library/dom": "^10.4.0",
    "@testing-library/react": "^16.2.0",
    "@types/node": "^22.10.2",
    "@types/react": "^19.2.0",
    "@types/react-dom": "^19.2.0",
    "@vitejs/plugin-react": "^5.0.4",
    "jsdom": "^27.0.0",
    "prettier": "^3.5.3",
    "typescript": "^5.7.2",
    "vite": "^7.1.7",
    "vitest": "^3.0.5",
    "web-vitals": "^5.1.0"
  }
}
````

## File: prettier.config.js
````javascript
//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
}

export default config
````

## File: PROJECT_README.MD
````markdown
# About the task

We’ll be creating a PLP (Product Listing Page), similar to those used by e-commerce websites, as the domain for this problem.

There’s no time limit for this task but If you are careful with the scope we expect it to be possible to complete this task in about 2 hours. It’s reasonable to include some text in the readme describing where you would have gone with more time.

## Tips on what we’re looking for

### 1. Simplicity

We value simplicity as an architectural virtue and a development practice. Solutions should reflect the difficulty of the assigned task, and should not be unnecessarily complex.

### 2. Approach

Use MERN stack for the solution.

### 3. Self-explanatory code

The solution you produce must speak for itself. Multiple paragraphs explaining the solution is a sign that the code isn’t straightforward enough to understand on its own.

### 4. Dealing with ambiguity

If there’s any ambiguity, please add this in a section at the bottom of the README. You should also make a choice to resolve the ambiguity.

# Begin the task

## Backend

Use Express JS with mongodb database on MongoDB Atlas (free account).

Create 2 APIs as follwing:

- Product Listing API
- Product CRUD API

## Frontend

### Page 1:

Create a Product Listing Page (PLP) page which will be responsible for:

1. Each product tile should show the product information from the api:

- Product Rating
- Product Image
- Title
- Price
- Description

2. Add to Cart Button

- Users should be able to click on the Add to Cart button multiple times.
- As the customer adds the item, it should update and show on the cart.
- Each item in the Cart should show the quantity of that particular item.
- The cart should show the price of each item multiplied by the quantity.

3. We are looking for a clean, professional and accessible web app which works on all the different screen sizes.

### Page 2:

Create a products management page with a table listing all the products with columns as follows:

Add Product Button for adding a product.

- Product Rating
- Product Image
- Title
- Price
- Description
- Actions - Edit, Delete Product

On clicking Edit or Delete a modal should open with corresponding functionalities.

# AI Tool Usage

While we encourage the use of AI tools as part of the learning process but to ensure transparency, please provide the following information regarding the use of AI tools in this submission:

1.  **Specific Use Cases:** Describe for what purposes tool was used (e.g., code generation, debugging assistance, query generation etc.).
2.  **Percentage of Code Generated by AI:** Provide an estimate of the percentage of the submitted code that was generated by AI.
3.  **How AI-Generated Code Was Reviewed:** Explain how you reviewed and verified the AI-generated code to ensure its correctness and quality.

Please note, during the technical interview, which will build upon this exercise, we'll focus on your coding abilities and problem-solving skills without the use of AI tools. This will allow us to see your direct approach and thought process.

Good luck…
````

## File: README.md
````markdown
Welcome to your new TanStack app! 

# Getting Started

To run this application:

```bash
pnpm install
pnpm dev
```

# Building For Production

To build this application for production:

```bash
pnpm build
```

## Testing

This project uses [Vitest](https://vitest.dev/) for testing. You can run the tests with:

```bash
pnpm test
```

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.


## Linting & Formatting


This project uses [eslint](https://eslint.org/) and [prettier](https://prettier.io/) for linting and formatting. Eslint is configured using [tanstack/eslint-config](https://tanstack.com/config/latest/docs/eslint). The following scripts are available:

```bash
pnpm lint
pnpm format
pnpm check
```



## Routing
This project uses [TanStack Router](https://tanstack.com/router). The initial setup is a file based router. Which means that the routes are managed as files in `src/routes`.

### Adding A Route

To add a new route to your application just add another a new file in the `./src/routes` directory.

TanStack will automatically generate the content of the route file for you.

Now that you have two routes you can use a `Link` component to navigate between them.

### Adding Links

To use SPA (Single Page Application) navigation you will need to import the `Link` component from `@tanstack/react-router`.

```tsx
import { Link } from "@tanstack/react-router";
```

Then anywhere in your JSX you can use it like so:

```tsx
<Link to="/about">About</Link>
```

This will create a link that will navigate to the `/about` route.

More information on the `Link` component can be found in the [Link documentation](https://tanstack.com/router/v1/docs/framework/react/api/router/linkComponent).

### Using A Layout

In the File Based Routing setup the layout is located in `src/routes/__root.tsx`. Anything you add to the root route will appear in all the routes. The route content will appear in the JSX where you use the `<Outlet />` component.

Here is an example layout that includes a header:

```tsx
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { Link } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
```

The `<TanStackRouterDevtools />` component is not required so you can remove it if you don't want it in your layout.

More information on layouts can be found in the [Layouts documentation](https://tanstack.com/router/latest/docs/framework/react/guide/routing-concepts#layouts).


## Data Fetching

There are multiple ways to fetch data in your application. You can use TanStack Query to fetch data from a server. But you can also use the `loader` functionality built into TanStack Router to load the data for a route before it's rendered.

For example:

```tsx
const peopleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/people",
  loader: async () => {
    const response = await fetch("https://swapi.dev/api/people");
    return response.json() as Promise<{
      results: {
        name: string;
      }[];
    }>;
  },
  component: () => {
    const data = peopleRoute.useLoaderData();
    return (
      <ul>
        {data.results.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    );
  },
});
```

Loaders simplify your data fetching logic dramatically. Check out more information in the [Loader documentation](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#loader-parameters).

### React-Query

React-Query is an excellent addition or alternative to route loading and integrating it into you application is a breeze.

First add your dependencies:

```bash
pnpm add @tanstack/react-query @tanstack/react-query-devtools
```

Next we'll need to create a query client and provider. We recommend putting those in `main.tsx`.

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// ...

const queryClient = new QueryClient();

// ...

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
```

You can also add TanStack Query Devtools to the root route (optional).

```tsx
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <ReactQueryDevtools buttonPosition="top-right" />
      <TanStackRouterDevtools />
    </>
  ),
});
```

Now you can use `useQuery` to fetch your data.

```tsx
import { useQuery } from "@tanstack/react-query";

import "./App.css";

function App() {
  const { data } = useQuery({
    queryKey: ["people"],
    queryFn: () =>
      fetch("https://swapi.dev/api/people")
        .then((res) => res.json())
        .then((data) => data.results as { name: string }[]),
    initialData: [],
  });

  return (
    <div>
      <ul>
        {data.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

You can find out everything you need to know on how to use React-Query in the [React-Query documentation](https://tanstack.com/query/latest/docs/framework/react/overview).

## State Management

Another common requirement for React applications is state management. There are many options for state management in React. TanStack Store provides a great starting point for your project.

First you need to add TanStack Store as a dependency:

```bash
pnpm add @tanstack/store
```

Now let's create a simple counter in the `src/App.tsx` file as a demonstration.

```tsx
import { useStore } from "@tanstack/react-store";
import { Store } from "@tanstack/store";
import "./App.css";

const countStore = new Store(0);

function App() {
  const count = useStore(countStore);
  return (
    <div>
      <button onClick={() => countStore.setState((n) => n + 1)}>
        Increment - {count}
      </button>
    </div>
  );
}

export default App;
```

One of the many nice features of TanStack Store is the ability to derive state from other state. That derived state will update when the base state updates.

Let's check this out by doubling the count using derived state.

```tsx
import { useStore } from "@tanstack/react-store";
import { Store, Derived } from "@tanstack/store";
import "./App.css";

const countStore = new Store(0);

const doubledStore = new Derived({
  fn: () => countStore.state * 2,
  deps: [countStore],
});
doubledStore.mount();

function App() {
  const count = useStore(countStore);
  const doubledCount = useStore(doubledStore);

  return (
    <div>
      <button onClick={() => countStore.setState((n) => n + 1)}>
        Increment - {count}
      </button>
      <div>Doubled - {doubledCount}</div>
    </div>
  );
}

export default App;
```

We use the `Derived` class to create a new store that is derived from another store. The `Derived` class has a `mount` method that will start the derived store updating.

Once we've created the derived store we can use it in the `App` component just like we would any other store using the `useStore` hook.

You can find out everything you need to know on how to use TanStack Store in the [TanStack Store documentation](https://tanstack.com/store/latest).

# Demo files

Files prefixed with `demo` can be safely deleted. They are there to provide a starting point for you to play around with the features you've installed.

# Learn More

You can learn more about all of the offerings from TanStack in the [TanStack documentation](https://tanstack.com).
````

## File: tsconfig.json
````json
{
  "include": [
    "**/*.ts",
    "**/*.tsx",
    "eslint.config.js",
    "prettier.config.js",
    "vite.config.js"
  ],

  "compilerOptions": {
    "target": "ES2022",
    "jsx": "react-jsx",
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "types": ["vite/client"],

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,

    /* Linting */
    "skipLibCheck": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
````

## File: vite.config.ts
````typescript
import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import viteReact from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'

import { tanstackRouter } from '@tanstack/router-plugin/vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    devtools(),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
````
