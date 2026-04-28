module.exports = [
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 42,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const DropdownMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const DropdownMenuTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const DropdownMenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"];
const DropdownMenuPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
const DropdownMenuSub = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sub"];
const DropdownMenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"];
const DropdownMenuSubTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: "ml-auto h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuSubTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"].displayName;
const DropdownMenuSubContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuSubContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"].displayName;
const DropdownMenuContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 60,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const DropdownMenuItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 79,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"].displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 105,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 104,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuCheckboxItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"].displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                        className: "h-2 w-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 127,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 126,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 118,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuRadioItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"].displayName;
const DropdownMenuLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 142,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"].displayName;
const DropdownMenuSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"].displayName;
const DropdownMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 159,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
;
}),
"[project]/src/components/Navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const Navigation = ()=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 py-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/favicon_io/android-chrome-512x512.png",
                            alt: "Paul Galvan",
                            className: "w-10 h-10"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navigation.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#projects",
                                className: `text-sm font-medium transition-colors ${pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
                                children: "Featured"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/projects",
                                className: `text-sm font-medium transition-colors ${pathname === "/projects" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
                                children: "All Work"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/resume",
                                className: `text-sm font-medium transition-colors ${pathname === "/resume" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
                                children: "Resume"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/personal-about",
                                className: `text-sm font-medium transition-colors ${pathname === "/personal-about" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            className: "gap-1.5",
                                            children: [
                                                "Connect",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navigation.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigation.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                        align: "end",
                                        className: "w-44",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://github.com/paulgalvan",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "flex items-center gap-2 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navigation.tsx",
                                                            lineNumber: 63,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " GitHub"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Navigation.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navigation.tsx",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.linkedin.com/in/paul-galvan/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "flex items-center gap-2 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navigation.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " LinkedIn"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Navigation.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navigation.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:paul.galvan@tufts.edu",
                                                    className: "flex items-center gap-2 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navigation.tsx",
                                                            lineNumber: 73,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " Email"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Navigation.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navigation.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navigation.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navigation.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navigation.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Navigation.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Navigation.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Navigation;
}),
"[project]/src/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "py-10 border-t border-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4 sm:flex-row sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-sm",
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " Paul Galvan"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 6,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:paul.galvan@tufts.edu",
                                className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                                children: "paul.galvan@tufts.edu"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 10,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.linkedin.com/in/paul-galvan/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                                children: "LinkedIn"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com/paulgalvan",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                                children: "GitHub"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 5,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/src/components/ProjectCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const ProjectCard = ({ project, index = 0, isStatic = false })=>{
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const images = project.images || [];
    const handleNext = (e)=>{
        e.stopPropagation();
        setCurrentIndex((prev)=>(prev + 1) % images.length);
    };
    const handlePrev = (e)=>{
        e.stopPropagation();
        setCurrentIndex((prev)=>(prev - 1 + images.length) % images.length);
    };
    const handleClick = ()=>{
        if (isStatic) return;
        router.push(`/projects/${project.id}`);
    };
    const hasMedia = project.images && project.images.length > 0 || project.gif_url;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        ref: cardRef,
        onClick: handleClick,
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        className: "pg-card group",
        style: {
            "--card-index": index
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pg-card__image-wrap",
                children: hasMedia ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        images.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-full",
                            children: [
                                images.map((img, i)=>{
                                    const isVideo = img.toLowerCase().endsWith('.mov') || img.toLowerCase().endsWith('.mp4');
                                    return isVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        src: img,
                                        autoPlay: true,
                                        loop: true,
                                        muted: true,
                                        playsInline: true,
                                        className: `pg-card__img absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${i === currentIndex ? "opacity-100 z-10" : "opacity-0 pointer-events-none -z-10"}`
                                    }, img, false, {
                                        fileName: "[project]/src/components/ProjectCard.tsx",
                                        lineNumber: 59,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: img,
                                        alt: `${project.title} image ${i + 1}`,
                                        fill: true,
                                        sizes: "(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw",
                                        unoptimized: img.toLowerCase().endsWith('.gif'),
                                        className: `pg-card__img transition-opacity duration-500 ${i === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"}`
                                    }, img, false, {
                                        fileName: "[project]/src/components/ProjectCard.tsx",
                                        lineNumber: 69,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0));
                                }),
                                isStatic && images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handlePrev,
                                            className: "absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-background/60 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background",
                                            "aria-label": "Previous image",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "12",
                                                height: "12",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "m15 18-6-6 6-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectCard.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 168
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectCard.tsx",
                                                lineNumber: 89,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectCard.tsx",
                                            lineNumber: 84,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleNext,
                                            className: "absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-background/60 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background",
                                            "aria-label": "Next image",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "12",
                                                height: "12",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "m9 18 6-6-6-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectCard.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 168
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectCard.tsx",
                                                lineNumber: 96,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectCard.tsx",
                                            lineNumber: 91,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1",
                                            children: images.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-1.5 h-1.5 rounded-full transition-colors ${i === currentIndex ? "bg-primary" : "bg-muted-foreground/30"}`
                                                }, i, false, {
                                                    fileName: "[project]/src/components/ProjectCard.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectCard.tsx",
                                            lineNumber: 98,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectCard.tsx",
                            lineNumber: 54,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : project.gif_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: project.gif_url,
                            alt: project.title,
                            className: `pg-card__img pg-card__img--static ${hovered && project.gif_url ? "pg-card__img--hidden" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard.tsx",
                            lineNumber: 110,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : null,
                        !isStatic && project.gif_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: project.gif_url,
                            alt: `${project.title} in action`,
                            className: `pg-card__img pg-card__img--gif ${hovered ? "pg-card__img--visible" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard.tsx",
                            lineNumber: 118,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pg-card__placeholder",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: project.title.charAt(0)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectCard.tsx",
                        lineNumber: 127,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard.tsx",
                    lineNumber: 126,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pg-card__body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "pg-card__title",
                        children: project.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectCard.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    project.quick_description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "pg-card__desc",
                        children: project.quick_description
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectCard.tsx",
                        lineNumber: 135,
                        columnNumber: 39
                    }, ("TURBOPACK compile-time value", void 0)),
                    project.notion_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex",
                        onClick: (e)=>e.stopPropagation(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: project.notion_url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-xs font-semibold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1",
                            children: [
                                "Documentation",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "12",
                                    height: "12",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectCard.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "15 3 21 3 21 9"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectCard.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "10",
                                            y1: "14",
                                            x2: "21",
                                            y2: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectCard.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectCard.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectCard.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectCard.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isStatic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pg-card__cta",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "18",
                            height: "18",
                            viewBox: "0 0 18 18",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "5",
                                    y1: "12",
                                    x2: "19",
                                    y2: "12"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "12 5 19 12 12 19"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectCard.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectCard.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectCard.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .pg-card {
          position: relative;
          cursor: ${isStatic ? "default" : "pointer"};
          display: flex;
          flex-direction: column;
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border) / 0.3);
          border-radius: 4px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          animation: pgCardIn 0.5s ease calc(var(--card-index, 0) * 60ms) forwards;
          transition: transform 0.3s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.3s cubic-bezier(0.2, 0, 0, 1);
        }

        @keyframes pgCardIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .pg-card:hover {
          transform: translateY(-2px);
          border-color: hsl(var(--border) / 0.8);
          background: hsl(var(--muted) / 0.05);
        }

        .pg-card__image-wrap {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: hsl(var(--muted) / 0.3);
        }

        .pg-card__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center center;
          padding: 8px;
          transition: transform 0.4s ease, opacity 0.3s ease;
        }

        .pg-card__img--hidden { opacity: 0; }
        .pg-card__img--gif    { opacity: 0; }
        .pg-card__img--flip   { opacity: 0; }
        .pg-card__img--visible { opacity: 1; }

        .pg-card__placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: hsl(var(--muted));
        }
        .pg-card__placeholder span {
          font-size: 3rem;
          font-weight: 700;
          color: hsl(var(--muted-foreground) / 0.25);
          font-family: Georgia, serif;
        }

        .pg-card__body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        .pg-card__title {
          font-size: 1.125rem;
          font-weight: 700;
          line-height: 1.2;
          color: hsl(var(--foreground));
          margin: 0;
        }

        .pg-card__desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: hsl(var(--muted-foreground) / 0.8);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .pg-card__cta {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: auto;
          padding-top: 8px;
          color: hsl(var(--foreground) / 0.4);
          transition: transform 0.2s ease, color 0.2s ease;
        }
        
        .pg-card:hover .pg-card__cta {
          transform: translateX(4px);
          color: hsl(var(--primary));
        }

        @media (prefers-reduced-motion: reduce) {
          .pg-card { transition: none; animation: none; opacity: 1; transform: none; }
          .pg-card__img { transition: none; }
          .pg-card__cta { transition: none; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectCard.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProjectCard;
}),
"[project]/src/data/projects.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("[{\"id\":\"Low-Cost-Robotic-Arm\",\"title\":\"Low-Cost Robotic Arm\",\"quick_description\":\"Affordable, open-source robotic arm for hands-on learning and experimentation\",\"display_order\":1,\"is_featured\":true,\"gif_url\":\"/LCRA-ezgif.com-optimize.gif\",\"hero_media\":\"/LCRA-ezgif.com-optimize.gif\",\"images\":[\"/images/lca-pic.png\"],\"tags\":[\"Robotics\",\"Coding\",\"CAD\",\"Ubuntu\",\"Microcontroller\"],\"overview\":{\"title\":\"Overview\",\"text\":\"The Low-Cost Robotic Arm was inspired by an earlier LEGO arm I built. In talking with Dr. Briana Bouchard, we reflected on how expensive the LEGO system was and how unintuitive its programming could be. That conversation sparked the idea of creating a more affordable and accessible alternative, and we teamed up to make it feasible. This project was conducted as research through the Louis Stokes Alliances for Minority Participation (LSAMP) program under Dr. Bouchard’s guidance.\"},\"development\":{\"title\":\"Development / Process\",\"items\":[{\"type\":\"image\",\"value\":\"/images/desc.png\"},{\"type\":\"text\",\"value\":\"Designing the Gripper was one of the most challenging parts of the project. Because it sits at the very end of the arm, the weight was a critical constraint. A smaller SG90 servo was chosen, which provided enough torque to handle small objects.\\n\\nSeveral concepts were tested before reaching the final version. Each option revealed new trade-offs and informed the next iteration. The process highlighted the constraints shape design choices. Small refinements ultimately made the difference between a fragile prototype and a dependable solution.\"},{\"type\":\"image\",\"value\":\"/ikdisp.gif\"},{\"type\":\"text\",\"value\":\"A big part of the project was writing the control code for the arm. I implemented inverse kinematics using trigenometry to simplify IK. This allowed the arm be move to a specific Cartesian position. A simple WASD interface for direct control was also added. This was my first time combining mechanical design with real-time programming, which gave me a deeper understanding of how hardware and software work together.\"}]},\"final_result\":{\"title\":\"Final Result\",\"items\":[{\"type\":\"image\",\"value\":\"/ikvid.gif\"},{\"type\":\"text\",\"value\":\"Overall, I was able to:\"},{\"type\":\"list\",\"value\":[\"Build a fully functional 4-DOF robotic arm using low-cost, 3D-printed parts and off-the-shelf electronics.\",\"Design a lightweight custom gripper that reliably handles small objects.\",\"Implement key robotics concepts such as kinematics, control systems, and programming for under $30.\"]}]},\"reflection\":{\"title\":\"Reflection\",\"text\":\"This project taught me how constraints like weight, torque, and printability shape design choices. I learned the value of rapid iteration, designing for manufacturability, and staying persistent when early versions failed. It was also my first time leading a design project from concept to reality, learning new skills on the fly and turning an idea into a working system. Most importantly, it showed me how affordable tools can make robotics education more accessible and inspiring.\"},\"content\":[],\"layout\":{\"desktop\":[{\"i\":\"hero_media\",\"x\":0,\"y\":0,\"w\":12,\"h\":8},{\"i\":\"overview\",\"x\":0,\"y\":8,\"w\":12,\"h\":4},{\"i\":\"development\",\"x\":0,\"y\":12,\"w\":12,\"h\":8},{\"i\":\"final_result\",\"x\":0,\"y\":20,\"w\":12,\"h\":8},{\"i\":\"reflection\",\"x\":0,\"y\":28,\"w\":12,\"h\":4}],\"mobile\":[{\"i\":\"hero_media\",\"x\":0,\"y\":0,\"w\":4,\"h\":3},{\"i\":\"overview\",\"x\":0,\"y\":3,\"w\":4,\"h\":2},{\"i\":\"development\",\"x\":0,\"y\":5,\"w\":4,\"h\":3},{\"i\":\"final_result\",\"x\":0,\"y\":8,\"w\":4,\"h\":3},{\"i\":\"reflection\",\"x\":0,\"y\":11,\"w\":4,\"h\":2}],\"lg\":[{\"w\":10,\"h\":5,\"x\":1,\"y\":0,\"i\":\"hero_media\",\"moved\":false,\"static\":false},{\"w\":12,\"h\":2,\"x\":0,\"y\":5,\"i\":\"overview\",\"moved\":false,\"static\":false},{\"w\":12,\"h\":9,\"x\":0,\"y\":7,\"i\":\"development\",\"moved\":false,\"static\":false},{\"w\":12,\"h\":8,\"x\":0,\"y\":16,\"i\":\"final_result\",\"moved\":false,\"static\":false},{\"w\":12,\"h\":2,\"x\":0,\"y\":24,\"i\":\"reflection\",\"moved\":false,\"static\":false}]}},{\"id\":\"Lego-Simple-Robotics\",\"title\":\"LEGO Simple Robotics\",\"quick_description\":\"Introduction to robotics through LEGO - exploring gears, sensors, and creative mechanisms.\",\"display_order\":99,\"is_featured\":false,\"gif_url\":\"/spirolego.gif\",\"hero_media\":\"/images/walle.jpg\",\"images\":[\"/images/walle.jpg\"],\"tags\":[\"Robotics\",\"LEGO\",\"Coding\"],\"content\":[{\"id\":\"lego-overview\",\"type\":\"overview\",\"title\":\"Overview\",\"text\":\"This collection showcases a series of projects built with the LEGO Spike Prime Sets, exploring mechanical design, programming, and robotics. These projects were part of an introductory robotics(EN1:Simple Robotics) course and demonstrate the creative possibilities of the LEGO platform.\"},{\"id\":\"lego-walker\",\"type\":\"project_item\",\"title\":\"LEGO Walker\",\"description\":\"We demonstrated the possibilites that could be achieved with LEGO by experimenting with motion. A simple forward-falling mechanism mimiced a walking pattern.\",\"image\":\"/images/legowalker.jpeg\",\"gif\":\"/walklego.gif\"},{\"id\":\"lego-bird\",\"type\":\"project_item\",\"title\":\"LEGO Bird\",\"description\":\"I applied biomimicry principles to design a bird with flapping wings. This project showed me how nature can inspire mechanical motion in LEGO builds.\",\"image\":\"/images/legobird.jpeg\",\"gif\":\"/birdlego.gif\"},{\"id\":\"lego-top\",\"type\":\"project_item\",\"title\":\"LEGO Spinning Top\",\"description\":\"Building a spinning top taught me how to use gears effectively to transfer and store energy. I learned how gear ratios can amplify speed in simple mechanisms.\",\"image\":\"/images/legotop.jpg\",\"gif\":\"/toplego.gif\"},{\"id\":\"lego-spirograph\",\"type\":\"project_item\",\"title\":\"LEGO Spirograph\",\"description\":\"This project used geometry and circular motion to create intricate designs with a tablet. I was the only one in the class to integrate a tablet into the mechanism, expanding the creative output.\",\"image\":\"/images/spirography.jpeg\",\"gif\":\"/spirolego.gif\"},{\"id\":\"lego-2d-printer\",\"type\":\"project_item\",\"title\":\"LEGO 2D Printer\",\"description\":\"For the square-drawing challenge, I developed an XY-axis LEGO printer. I was the only one to turn the task into a functional 2D drawing machine, deepening my understanding of coordinate motion.\",\"image\":\"/images/2dprinter.jpeg\",\"gif\":\"/squarelego.gif\"},{\"id\":\"lego-drill\",\"type\":\"project_item\",\"title\":\"LEGO Drill\",\"description\":\"I designed this handheld drill around the constraint of mimicking how astronauts might change a nut in space. It gave me insight into problem-solving under extreme conditions where ergonomics and efficiency are critical.\",\"image\":\"/images/legodrill.jpg\",\"gif\":\"/drillLego.gif\"},{\"id\":\"lego-ps4-car\",\"type\":\"project_item\",\"title\":\"PS4-Controlled LEGO Car\",\"description\":\"By integrating a PS4 controller, I learned the intricacies of building a responsive LEGO driving system. This project showed me how LEGO could be extended into interactive, remote-controlled systems.\",\"image\":\"/carlego.gif\",\"gif\":\"/carlego.gif\"},{\"id\":\"lego-snake\",\"type\":\"project_item\",\"title\":\"LEGO Snake\",\"description\":\"I adapted the PS4 control system to create a slithering LEGO snake. This project was themed for a Halloween house, showing how robotics could merge with creative storytelling.\",\"image\":\"/images/legosnake.jpg\",\"gif\":\"/snakelego.gif\"},{\"id\":\"lego-walle\",\"type\":\"project_item\",\"title\":\"Repurposed WALL-E Set\",\"description\":\"For the final project, I added motors and PS4 controller support to a LEGO WALL-E and designed a maze it could navigate. Although the elementary school demo was cancelled, the project taught me how to combine robotics with user interaction in playful, educational ways.\",\"image\":\"/images/walle.jpg\",\"gif\":\"/walle.gif\"}],\"layout\":{\"lg\":[{\"w\":12,\"h\":2,\"x\":0,\"y\":0,\"i\":\"lego-overview\",\"moved\":false,\"static\":false},{\"w\":6,\"h\":6,\"x\":0,\"y\":2,\"i\":\"lego-walker\",\"moved\":false,\"static\":false},{\"w\":6,\"h\":6,\"x\":6,\"y\":2,\"i\":\"lego-bird\",\"moved\":false,\"static\":false},{\"w\":6,\"h\":6,\"x\":0,\"y\":8,\"i\":\"lego-top\",\"moved\":false,\"static\":false},{\"w\":6,\"h\":6,\"x\":6,\"y\":8,\"i\":\"lego-spirograph\",\"moved\":false,\"static\":false},{\"w\":6,\"h\":6,\"x\":0,\"y\":14,\"i\":\"lego-2d-printer\",\"moved\":false,\"static\":false},{\"w\":6,\"h\":6,\"x\":6,\"y\":14,\"i\":\"lego-drill\",\"moved\":false,\"static\":false},{\"w\":6,\"h\":5,\"x\":6,\"y\":20,\"i\":\"lego-ps4-car\",\"moved\":false,\"static\":false},{\"w\":6,\"h\":5,\"x\":0,\"y\":20,\"i\":\"lego-snake\",\"moved\":false,\"static\":false},{\"w\":9,\"h\":10,\"x\":1,\"y\":25,\"i\":\"lego-walle\",\"moved\":false,\"static\":false}]}},{\"id\":\"project-elles\",\"title\":\"Project Elles\",\"quick_description\":\"A LEGO Humanoid Robot controlled through a custom LEGO controller. This link takes you to a Notion page documenting the project.\",\"display_order\":1,\"is_featured\":false,\"hero_media\":\"/images/elles.jpg\",\"images\":[\"/images/elles.jpg\"],\"gif_url\":\"/elles.gif\",\"notion_url\":\"https://flax-haze-954.notion.site/Project-Elles-acebc264597c43f59996034591a59f33?pvs=74\",\"tags\":[\"LEGO\",\"Robotics\",\"Coding\"]},{\"id\":\"CAD-Portfolio\",\"title\":\"CAD Portfolio\",\"quick_description\":\"A collection of projects showcasing Computer-Aided Design skills and techniques.\",\"display_order\":99,\"is_featured\":false,\"gif_url\":\"/cadslide.gif\",\"hero_media\":\"/cadslide.gif\",\"images\":[\"/images/me10cad/model.png\"],\"tags\":[\"CAD\",\"Design\"],\"content\":[{\"id\":\"overview\",\"type\":\"overview\",\"title\":\"Overview\",\"text\":\"This portfolio collection highlights my introduction to Computer-Aided Design (CAD) through projects completed in ME 10: Materials and Manufacturing. It demonstrates my ability to translate conceptual ideas into detailed 3D models, perform complex assemblies, and use of technical drawings. The projects reflect my learning and application of industry-standard CAD software and design principles. Some projects were developed by following instructional videos to practice foundational skills such as mates and extrusions, while others were created by interpreting and modeling directly from provided drawings.\"},{\"id\":\"cad-lego-brick\",\"type\":\"project_item\",\"title\":\"LEGO Brick\",\"description\":\"Replicated an existing part with accurate proportions to strengthen parametric modeling skills.\",\"image\":\"/images/me10cad/legobrick.png\"},{\"id\":\"cad-mounting-bracket\",\"type\":\"project_item\",\"title\":\"Mounting Bracket\",\"description\":\"Learned precision dimensioning and constraints for mechanical parts.\",\"image\":\"/images/me10cad/model.png\"},{\"id\":\"cad-citrus-press\",\"type\":\"project_item\",\"title\":\"Citrus Press Assembly\",\"description\":\"Practiced combining multiple parts into a functional assembly with moving components.\",\"image\":\"/images/me10cad/citrus.png\"},{\"id\":\"cad-coffee-mug\",\"type\":\"project_item\",\"title\":\"Coffee Mug\",\"description\":\"Practiced surface modeling, lofts, and fillets to recreate a common object.\",\"image\":\"/images/me10cad/mug.png\"},{\"id\":\"cad-pumpkin\",\"type\":\"project_item\",\"title\":\"Pumpkin\",\"description\":\"Used advanced features such as revolves and patterns to create a complex organic shape.\",\"image\":\"/images/me10cad/pumpkin.png\"},{\"id\":\"cad-vase\",\"type\":\"project_item\",\"title\":\"Vase\",\"description\":\"A vase I designed and printed for personal use, showcasing creativity and practical application of CAD skills.\",\"image\":\"/images/me10cad/vase.png\"}],\"layout\":{\"lg\":[{\"w\":12,\"h\":2,\"x\":0,\"y\":0,\"i\":\"overview\",\"moved\":false,\"static\":false},{\"w\":6,\"h\":4,\"x\":0,\"y\":2,\"i\":\"cad-lego-brick\",\"moved\":false,\"static\":false},{\"w\":6,\"h\":4,\"x\":6,\"y\":9,\"i\":\"cad-mounting-bracket\",\"moved\":false,\"static\":false},{\"w\":6,\"h\":7,\"x\":6,\"y\":2,\"i\":\"cad-citrus-press\",\"moved\":false,\"static\":false},{\"w\":6,\"h\":6,\"x\":0,\"y\":6,\"i\":\"cad-coffee-mug\",\"moved\":false,\"static\":false},{\"w\":6,\"h\":6,\"x\":0,\"y\":12,\"i\":\"cad-pumpkin\",\"moved\":false,\"static\":false},{\"w\":6,\"h\":6,\"x\":6,\"y\":13,\"i\":\"cad-vase\",\"moved\":false,\"static\":false}],\"md\":[{\"i\":\"hero_media\",\"x\":0,\"y\":0,\"w\":10,\"h\":5},{\"i\":\"overview\",\"x\":0,\"y\":5,\"w\":10,\"h\":2},{\"i\":\"cad-intro-text\",\"x\":0,\"y\":7,\"w\":10,\"h\":2},{\"i\":\"cad-lego-brick\",\"x\":0,\"y\":9,\"w\":5,\"h\":4},{\"i\":\"cad-mounting-bracket\",\"x\":5,\"y\":9,\"w\":5,\"h\":4},{\"i\":\"cad-citrus-press\",\"x\":0,\"y\":13,\"w\":5,\"h\":4},{\"i\":\"cad-coffee-mug\",\"x\":5,\"y\":13,\"w\":5,\"h\":4},{\"i\":\"cad-pumpkin\",\"x\":0,\"y\":17,\"w\":5,\"h\":4},{\"i\":\"cad-vase\",\"x\":5,\"y\":17,\"w\":5,\"h\":4}],\"sm\":[{\"i\":\"hero_media\",\"x\":0,\"y\":0,\"w\":6,\"h\":4},{\"i\":\"overview\",\"x\":0,\"y\":4,\"w\":6,\"h\":2},{\"i\":\"cad-intro-text\",\"x\":0,\"y\":6,\"w\":6,\"h\":2},{\"i\":\"cad-lego-brick\",\"x\":0,\"y\":8,\"w\":6,\"h\":4},{\"i\":\"cad-mounting-bracket\",\"x\":0,\"y\":12,\"w\":6,\"h\":4},{\"i\":\"cad-citrus-press\",\"x\":0,\"y\":16,\"w\":6,\"h\":4},{\"i\":\"cad-coffee-mug\",\"x\":0,\"y\":20,\"w\":6,\"h\":4},{\"i\":\"cad-pumpkin\",\"x\":0,\"y\":24,\"w\":6,\"h\":4},{\"i\":\"cad-vase\",\"x\":0,\"y\":28,\"w\":6,\"h\":4}]}},{\"id\":\"Actuaid\",\"title\":\"Actuaid\",\"quick_description\":\"Assistive device for rehabilitation \",\"display_order\":1,\"is_featured\":true,\"gif_url\":\"/actuaid.gif\",\"hero_media\":\"/prbhero.png\",\"images\":[\"/images/actuaid.png\"],\"tags\":[\"Robotics\",\"Coding\",\"Microcontroller\",\"CAD\"],\"overview\":{\"title\":\"Overview\",\"text\":\"ActuAid was designed to address sports-related injuries that affect the hand. ActuAid used 3D-printed fluidic actuators integrated into a wearable glove to support mobility and dexterity recovery. By combining soft robotics with simple electronic control, the project demonstrates how accessible, customizable devices can make rehabilitation more effective and affordable. It developed as the final project for ME193: Printable Robotics.\"},\"development\":{\"title\":\"Development / Process\",\"items\":[{\"type\":\"image\",\"value\":\"/images/prbw1.jpg\"},{\"type\":\"text\",\"value\":\"We began by researching wearable soft robotics and prototyping a bending actuator. Academic papers and prior work in soft robotic exoskeletons helped shape our design direction, confirming feasibility and showing how fluidic actuators could be adapted for hand rehabilitation in athletes.\"},{\"type\":\"image\",\"value\":\"/prbw3.gif\"},{\"type\":\"text\",\"value\":\"Many print iterations were completed to refine the actuator’s design, focusing on airtightness, chamber spacing, and deflection. These iterations ensured the actuator could reliably inflate and produce consistent motion.\"},{\"type\":\"image\",\"value\":\"/images/prbw2.gif\"},{\"type\":\"text\",\"value\":\"With a functional actuator established, we integrated the electronic components -pumps, valves, and an LCD interface- to control air pressure and responsiveness. The actuator was then combined with a glove prototype, and both the printed design and electronics were refined to ensure reliable motion for rehabilitation use.\"}]},\"final_result\":{\"title\":\"Final Result\",\"items\":[{\"type\":\"image\",\"value\":\"/actuaid.gif\"},{\"type\":\"text\",\"value\":\"Overall, I was able to:\"},{\"type\":\"list\",\"value\":[\"Design and fabricate a 3D-printed fluidic actuator through multiple iterations, achieving an airtight system capable of reliable inflation and deflection.\",\"Integrate the actuator into a wearable glove to enable controlled finger movement.\",\"Develop and test an electronic control system with pumps, valves, and an LCD interface.\"]}]},\"reflection\":{\"title\":\"Reflection\",\"text\":\"This project highlighted the versatility of 3D printing and the potential of soft robotics in rehabilitation. We learned the importance of patience and iteration, as multiple design cycles were required to achieve an airtight, functional actuator. These iterations showed how fluidic actuators can be refined to produce meaningful movement, and how combining hardware and software expands the possibilities for assistive technologies. Ultimately, ActuAid demonstrates that innovative, accessible solutions can be created to support medical rehabilitation.\"},\"content\":[],\"layout\":{\"desktop\":[{\"i\":\"hero_media\",\"x\":0,\"y\":0,\"w\":12,\"h\":8},{\"i\":\"overview\",\"x\":0,\"y\":8,\"w\":12,\"h\":4},{\"i\":\"development\",\"x\":0,\"y\":12,\"w\":12,\"h\":8},{\"i\":\"final_result\",\"x\":0,\"y\":20,\"w\":12,\"h\":8},{\"i\":\"reflection\",\"x\":0,\"y\":28,\"w\":12,\"h\":4}],\"mobile\":[{\"i\":\"hero_media\",\"x\":0,\"y\":0,\"w\":4,\"h\":3},{\"i\":\"overview\",\"x\":0,\"y\":3,\"w\":4,\"h\":2},{\"i\":\"development\",\"x\":0,\"y\":5,\"w\":4,\"h\":3},{\"i\":\"final_result\",\"x\":0,\"y\":8,\"w\":4,\"h\":3},{\"i\":\"reflection\",\"x\":0,\"y\":11,\"w\":4,\"h\":2}],\"lg\":[{\"w\":10,\"h\":5,\"x\":1,\"y\":0,\"i\":\"hero_media\",\"moved\":false,\"static\":false},{\"w\":12,\"h\":2,\"x\":0,\"y\":5,\"i\":\"overview\",\"moved\":false,\"static\":false},{\"w\":12,\"h\":11,\"x\":0,\"y\":7,\"i\":\"development\",\"moved\":false,\"static\":false},{\"w\":12,\"h\":9,\"x\":0,\"y\":18,\"i\":\"final_result\",\"moved\":false,\"static\":false},{\"w\":12,\"h\":2,\"x\":0,\"y\":27,\"i\":\"reflection\",\"moved\":false,\"static\":false}]}},{\"id\":\"Controlled_Car\",\"title\":\"PID Controlled Car\",\"quick_description\":\"PID-controlled car with web interface and multi-car network communication.\",\"display_order\":2,\"is_featured\":true,\"gif_url\":\"/mamalona.gif\",\"hero_media\":\"/mamalona.gif\",\"images\":[\"/images/mamalona.png\"],\"tags\":[\"CAD\",\"Coding\",\"Microcontroller\",\"Robotics\",\"PCB Design\"],\"overview\":{\"title\":\"Overview\",\"text\":\"The Low-Cost Robotic Arm was inspired by an earlier LEGO arm I built. In talking with Dr. Briana Bouchard, we reflected on how expensive the LEGO system was and how unintuitive its programming could be. That conversation sparked the idea of creating a more affordable and accessible alternative, and we teamed up to make it feasible. This project was conducted as research through the Louis Stokes Alliances for Minority Participation (LSAMP) program under Dr. Bouchard’s guidance. CLICK HERE to be redirected to the documentation I created to summarize the project.\"},\"development\":{\"title\":\"Development / Process\",\"items\":[{\"type\":\"image\",\"value\":\"/images/desc.png\"},{\"type\":\"text\",\"value\":\"Designing the Gripper was one of the most challenging parts of the project. Because it sits at the very end of the arm, the weight was a critical constraint. A smaller SG90 servo was chosen, which provided enough torque to handle small objects.\\n\\nSeveral concepts were tested before reaching the final version. Each option revealed new trade-offs and informed the next iteration. The process highlighted the constraints shape design choices. Small refinements ultimately made the difference between a fragile prototype and a dependable solution.\"},{\"type\":\"image\",\"value\":\"/ikdisp.gif\"},{\"type\":\"text\",\"value\":\"A big part of the project was writing the control code for the arm. I implemented inverse kinematics using trigenometry to simplify IK. This allowed the arm be move to a specific Cartesian position. A simple WASD interface for direct control was also added. This was my first time combining mechanical design with real-time programming, which gave me a deeper understanding of how hardware and software work together.\"}]},\"final_result\":{\"title\":\"Final Result\",\"items\":[{\"type\":\"image\",\"value\":\"/ikvid.gif\"},{\"type\":\"text\",\"value\":\"Overall, I was able to:\"},{\"type\":\"list\",\"value\":[\"Build a fully functional 4-DOF robotic arm using low-cost, 3D-printed parts and off-the-shelf electronics.\",\"Design a lightweight custom gripper that reliably handles small objects.\",\"Implement key robotics concepts such as kinematics, control systems, and programming for under $30.\"]}]},\"reflection\":{\"title\":\"Reflection\",\"text\":\"This project taught me how constraints like weight, torque, and printability shape design choices. I learned the value of rapid iteration, designing for manufacturability, and staying persistent when early versions failed. It was also my first time leading a design project from concept to reality, learning new skills on the fly and turning an idea into a working system. Most importantly, it showed me how affordable tools can make robotics education more accessible and inspiring.\"},\"content\":[],\"layout\":{\"desktop\":[{\"i\":\"hero_media\",\"x\":0,\"y\":0,\"w\":12,\"h\":8},{\"i\":\"overview\",\"x\":0,\"y\":8,\"w\":12,\"h\":4},{\"i\":\"development\",\"x\":0,\"y\":12,\"w\":12,\"h\":8},{\"i\":\"final_result\",\"x\":0,\"y\":20,\"w\":12,\"h\":8},{\"i\":\"reflection\",\"x\":0,\"y\":28,\"w\":12,\"h\":4}],\"mobile\":[{\"i\":\"hero_media\",\"x\":0,\"y\":0,\"w\":4,\"h\":3},{\"i\":\"overview\",\"x\":0,\"y\":3,\"w\":4,\"h\":2},{\"i\":\"development\",\"x\":0,\"y\":5,\"w\":4,\"h\":3},{\"i\":\"final_result\",\"x\":0,\"y\":8,\"w\":4,\"h\":3},{\"i\":\"reflection\",\"x\":0,\"y\":11,\"w\":4,\"h\":2}],\"lg\":[{\"w\":10,\"h\":5,\"x\":1,\"y\":0,\"i\":\"hero_media\",\"moved\":false,\"static\":false},{\"w\":12,\"h\":2,\"x\":0,\"y\":5,\"i\":\"overview\",\"moved\":false,\"static\":false},{\"w\":12,\"h\":9,\"x\":0,\"y\":7,\"i\":\"development\",\"moved\":false,\"static\":false},{\"w\":12,\"h\":8,\"x\":0,\"y\":16,\"i\":\"final_result\",\"moved\":false,\"static\":false},{\"w\":12,\"h\":2,\"x\":0,\"y\":24,\"i\":\"reflection\",\"moved\":false,\"static\":false}]}},{\"id\":\"me10-soccerball\",\"title\":\"Metal Casting Project: Pewter Soccer Ball\",\"quick_description\":\"Designed and cast a pewter soccer ball trophy through multiple mold-making iterations.\",\"display_order\":14,\"is_featured\":false,\"gif_url\":\"/casting.gif\",\"hero_media\":\"/casting.gif\",\"images\":[\"/images/me10man/pewter.jpg\"],\"tags\":[\"Manufacturing\"],\"overview\":{\"title\":\"Overview\",\"text\":\"For our ME10 final project, my team and I set out to recreate the Ballon d’Or trophy as a pewter soccer ball. The project became an exploration of casting methods, iteration, and creative problem solving.\"},\"development\":{\"title\":\"Development / Process\",\"items\":[{\"type\":\"text\",\"value\":\"We began by attempting to cast a half-sphere of the ball directly, but quickly learned that the plastic mold would melt under molten pewter. To overcome this, I suggested vacuum forming the ball to create a wax replica, which could then be packed in sand and replaced with metal during the pour.\"},{\"type\":\"image\",\"value\":\"/images/me10man/wax.jpeg\",\"caption\":\"Wax mold experiment before transitioning to silicone\"},{\"type\":\"text\",\"value\":\"The wax casting approach worked in theory but presented new issues with removing the wax cleanly and creating a hollow interior. After several rounds of testing, we switched to making a hard silicone base mold. This allowed us to pour pewter safely and achieve a consistent final shape.\"},{\"type\":\"image\",\"value\":\"/images/me10man/silicone.jpeg\",\"caption\":\"Silicone mold for the final pewter casting\"}]},\"final_result\":{\"title\":\"Final Result\",\"items\":[{\"type\":\"text\",\"value\":\"The final product combined creativity with practical problem solving. This project taught me not only the technical aspects of casting, but also how to pivot and refine designs through hands-on experimentation.\"},{\"type\":\"image\",\"value\":\"/images/me10man/pewter.jpg\",\"caption\":\"Final pewter casting mounted on CNC-routed wooden base\"}]},\"reflection\":{\"title\":\"Reflection\",\"text\":\"This project taught me how unpredictable and iterative the casting process can be. Each failed attempt, from a melted mold to a collapsed wax form, pushed our team to rethink our approach and better understand how different materials behave. I learned how to adapt quickly when faced with real manufacturing constraints and to explore new fabrication methods like vacuum forming, lost wax casting, and plaster molding. Working through each challenge reinforced the importance of flexibility, teamwork, and creative problem solving in engineering. By the end, what began as a simple idea to replicate a trophy became a lesson in resilience, collaboration, and the craft of turning a concept into a tangible, polished piece.\"},\"content\":[],\"layout\":{\"lg\":[{\"w\":10,\"h\":5,\"x\":1,\"y\":2,\"i\":\"hero_media\",\"moved\":false,\"static\":false},{\"w\":12,\"h\":2,\"x\":0,\"y\":0,\"i\":\"overview\",\"moved\":false,\"static\":false},{\"w\":12,\"h\":14,\"x\":0,\"y\":7,\"i\":\"development\",\"moved\":false,\"static\":false},{\"w\":7,\"h\":10,\"x\":0,\"y\":21,\"i\":\"final_result\",\"moved\":false,\"static\":false},{\"w\":5,\"h\":5,\"x\":7,\"y\":21,\"i\":\"reflection\",\"moved\":false,\"static\":false}],\"md\":[{\"w\":10,\"h\":5,\"x\":0,\"y\":0,\"i\":\"hero_media\"},{\"w\":10,\"h\":2,\"x\":0,\"y\":5,\"i\":\"overview\"},{\"w\":10,\"h\":9,\"x\":0,\"y\":7,\"i\":\"development\"},{\"w\":6,\"h\":8,\"x\":0,\"y\":16,\"i\":\"final_result\"},{\"w\":10,\"h\":2,\"x\":0,\"y\":24,\"i\":\"reflection\"}],\"sm\":[{\"w\":6,\"h\":4,\"x\":0,\"y\":0,\"i\":\"hero_media\"},{\"w\":6,\"h\":2,\"x\":0,\"y\":4,\"i\":\"overview\"},{\"w\":6,\"h\":9,\"x\":0,\"y\":6,\"i\":\"development\"},{\"w\":4,\"h\":8,\"x\":0,\"y\":15,\"i\":\"final_result\"},{\"w\":6,\"h\":2,\"x\":0,\"y\":23,\"i\":\"reflection\"}]}},{\"id\":\"the-hand\",\"title\":\"The Hand\",\"quick_description\":\"A LEGO Hand that mirrors yours!. This link takes you to a Notion page documenting the project.\",\"display_order\":101,\"is_featured\":false,\"hero_media\":\"/images/handlego.png\",\"images\":[\"/images/handlego.png\"],\"gif_url\":\"/handlego.gif\",\"notion_url\":\"https://flax-haze-954.notion.site/The-Hand-4bc8bda364364681be665b87bdda50e6?source=copy_link\",\"tags\":[\"LEGO\",\"Robotics\",\"Coding\"]},{\"id\":\"me-35\",\"title\":\"Robotics Portfolio (ME35)\",\"quick_description\":\"A collection of my robotics projects from my ME35 class.\",\"display_order\":102,\"is_featured\":false,\"hero_media\":\"/images/ME35.png\",\"images\":[\"/images/ME35.png\"],\"gif_url\":\"/me35.gif\",\"notion_url\":\"https://flax-haze-954.notion.site/ME35-Portfolio-f40b04e4f3944280beca02ca9bbc8079?source=copy_link\",\"tags\":[\"Robotics\",\"Coding\",\"Microcontroller\"]}]");
}),
"[project]/src/hooks/useProjects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProjects",
    ()=>useProjects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects.json.[json].cjs [app-ssr] (ecmascript)");
;
;
;
const useProjects = ()=>{
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const fetchProjects = async ()=>{
        try {
            setLoading(true);
            setError(null);
            // Load directly from the bundled JSON - no artificial delay needed
            const processedProjects = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].map((project)=>{
                // Prioritize existing 'images' array, otherwise look in 'content'
                const existingImages = project.images && project.images.length > 0 ? project.images : [];
                const firstImageFromContent = existingImages.length === 0 ? project.content?.find((item)=>item.type === 'image') : undefined;
                return {
                    ...project,
                    images: existingImages.length > 0 ? existingImages : firstImageFromContent ? [
                        firstImageFromContent.value
                    ] : []
                };
            });
            setProjects(processedProjects || []);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Failed to fetch projects";
            setError(errorMessage);
            toast({
                title: "Error",
                description: errorMessage,
                variant: "destructive"
            });
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchProjects();
    }, []);
    // Get all unique tags from projects
    const getAllTags = ()=>{
        const tagSet = new Set();
        projects.forEach((project)=>{
            if (project.tags) {
                project.tags.forEach((tag)=>tagSet.add(tag));
            }
        });
        return Array.from(tagSet).sort();
    };
    // Filter projects by tags
    const getFilteredProjects = (selectedTags)=>{
        let filtered = projects;
        if (selectedTags.length > 0) {
            filtered = projects.filter((project)=>selectedTags.every((tag)=>project.tags.includes(tag)));
        }
        return filtered.sort((a, b)=>{
            if (a.is_featured && !b.is_featured) return -1;
            if (!a.is_featured && b.is_featured) return 1;
            return a.display_order - b.display_order;
        });
    };
    // Get featured projects
    const getFeaturedProjects = ()=>{
        return projects.filter((project)=>project.is_featured);
    };
    return {
        projects,
        loading,
        error,
        refetch: fetchProjects,
        getAllTags,
        getFilteredProjects,
        getFeaturedProjects
    };
};
}),
"[project]/src/components/Experience.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
// ─── Data ─────────────────────────────────────────────────────────────────────
const experiences = [
    // ── Education ──
    {
        id: "tufts-ms",
        org: "Tufts University",
        role: "M.S. in Mechanical Engineering",
        dates: "Committed for Fall 2026",
        location: "Medford, MA",
        logo: "/logos/tufts.png",
        type: "education",
        accentColor: "#3182CE",
        bullets: [
            "Committed to pursue a Master's degree, focusing on advanced coursework in robotics, manufacturing, and hardware-software integration."
        ]
    },
    {
        id: "tufts-bs",
        org: "Tufts University",
        role: "B.S. in Mechanical Engineering",
        dates: "Sep 2022 – May 2026",
        location: "Medford, MA",
        logo: "/logos/tufts.png",
        type: "education",
        accentColor: "#41B6E6",
        bullets: [
            "Minor in Human Factors Engineering.",
            "Actively involved in the NOLOP Makerspace and CEEO while building foundational engineering skills."
        ]
    },
    {
        id: "hku",
        org: "University of Hong Kong (HKU)",
        role: "Study Abroad",
        dates: "Spring 2025",
        location: "Hong Kong",
        logo: "/logos/hku.png",
        type: "education",
        accentColor: "#00A3A1",
        bullets: [
            "Studied Systems and Controls through an international lens, adapting to new academic frameworks and collaborating with a diverse, global cohort.",
            "Expanded multicultural engineering perspectives during an intensive semester abroad."
        ]
    },
    {
        id: "pavia",
        org: "University of Pavia",
        role: "Study Abroad",
        dates: "Summer 2024",
        location: "Pavia, Italy",
        logo: "/logos/pavia.svg",
        type: "education",
        accentColor: "#800000",
        bullets: [
            "Completed accelerated coursework in Data Structures and Introductory Italian.",
            "Managed remote curriculum development for BxCoding simultaneously while adapting to a new cultural and academic environment."
        ]
    },
    // ── Internships ──
    {
        id: "gillette",
        org: "Gillette (Procter & Gamble)",
        role: "Process Engineering Intern",
        dates: "May 2025 – Aug 2025",
        location: "Andover, MA",
        logo: "/logos/gillette-logo.png",
        type: "internship",
        accentColor: "#0066CC",
        bullets: [
            "Optimized operations with automation and standardization, lowering scrap/error rates, saving ~$700K annually.",
            "Elevated department output by 33% through performance optimization and data-driven machine recalibration.",
            "Implemented preventative failure solutions while ensuring comprehensive documentation for smooth project transition."
        ]
    },
    {
        id: "bxcoding",
        org: "BxCoding",
        role: "Curriculum Developer & Instructor",
        dates: "Mar 2024 – Sep 2024",
        location: "Remote",
        logo: "/logos/bxcoding.png",
        type: "internship",
        accentColor: "#2563EB",
        bullets: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "Developed comprehensive STEM curriculum for a summer camp at ",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://bxcoding.org/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            textDecoration: 'underline',
                            color: '#2563EB',
                            fontWeight: 500
                        },
                        children: "BxCoding"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Experience.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    ", teaching Arduino, C++, and sensor integration to ~50 students."
                ]
            }, void 0, true),
            "Managed remote program execution while studying abroad in Italy, ensuring high-quality technical education and student engagement."
        ]
    },
    {
        id: "ceeo",
        org: "Center for Engineering Education & Outreach, Tufts",
        role: "LEGO Education Product Testing Intern",
        dates: "Jun 2023 – Aug 2023",
        location: "Medford, MA",
        logo: "/logos/ceeologo.png",
        type: "internship",
        accentColor: "#E3000B",
        bullets: [
            "Built a humanoid robot with integrated Bluetooth (BLE) code, enabling communication across 7 micro-controllers.",
            "Integrated AI/ML perception (MediaPipe) with robotic control for multi-motor system calibration.",
            "Constructed a 6-DOF robot arm with 12 motors and 2 hubs, controlled with BLE and LEGO software."
        ]
    },
    // ── Research ──
    {
        id: "idea-lab",
        org: "IDEA Lab, Tufts University",
        role: "R&D Intern",
        dates: "Oct 2024 – Present",
        location: "Medford, MA",
        logo: "/logos/idealab.jpeg",
        type: "research",
        accentColor: "#4F46E5",
        bullets: [
            "Designed a biocompatible wrap with ultrasonic sensors, converting music into physical touch for rehabilitation.",
            "Applied signal processing for hardware-software integration, enabling real-time feedback in prototype systems.",
            "Collaborated in daily 2-hour research meetings with a team of 7, driving product development and timely execution."
        ]
    },
    {
        id: "bouchard",
        org: "Bouchard Research Lab, Tufts University",
        role: "R&D Intern → R&D Researcher",
        dates: "Sep 2023 – Aug 2024",
        location: "Medford, MA",
        type: "research",
        accentColor: "#7C3AED",
        bullets: [
            "Published open-source documentation to GitHub including bill of materials, design process, and assembly instructions.",
            "Developed simple-to-understand robotic control algorithms with system-level integration of inverse kinematics in Python.",
            "Presented research at 3 conferences to 120 attendees, securing interest from 2 schools and engaging 60+ K-12 students.",
            "Designed a low-cost robotic arm for under $60 to make engineering education accessible to low-income students.",
            "Decreased manufacturing time by 58% by consolidating fabrication into a single component."
        ]
    },
    // ── Campus ──
    {
        id: "nolop",
        org: "NOLOP Makerspace, Tufts University",
        role: "Assistant Fabrication Engineer",
        dates: "Jan 2024 – Present",
        location: "Medford, MA",
        logo: "/logos/noloplogo.png",
        type: "campus",
        accentColor: "#059669",
        bullets: [
            "Mentored 15 students per week by leading 20+ engineering workshops, equipping 300+ students with manufacturing and design skills.",
            "Diagnosed and resolved fabrication equipment, optimizing machine shop practices to prevent malfunctions and ensure safety."
        ]
    },
    {
        id: "ceeo-olf",
        org: "Center for Engineering Education & Outreach (CEEO)",
        role: "Online Learning Fellow & Educator",
        dates: "Sep 2023 – Dec 2024",
        location: "Somerville, MA & Remote",
        logo: "/logos/ceeologo.png",
        type: "campus",
        accentColor: "#E3000B",
        bullets: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "Taught foundational robotics and engineering concepts to Navajo Nation students remotely using LEGO SPIKE Prime hardware as an ",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://sites.tufts.edu/ceeoolf/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            textDecoration: 'underline',
                            color: '#E3000B',
                            fontWeight: 500
                        },
                        children: "Online Learning Fellow"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Experience.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    "."
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "Developed weekly lesson plans and led in-person STEM activities for PK-8 students at the ",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://somerville.k12.ma.us/schools/winter-hill-community-innovation-school-pk-8",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            textDecoration: 'underline',
                            color: '#E3000B',
                            fontWeight: 500
                        },
                        children: "Winter Hill Community Innovation School"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Experience.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    "."
                ]
            }, void 0, true)
        ]
    },
    // ── Leadership ──
    {
        id: "white-house",
        org: "White House Easter Egg Hunt, Biden Administration",
        role: "Project Lead",
        dates: "Mar 2023 – Apr 2023",
        location: "Washington, DC",
        logo: "/logos/whitehouse.png",
        type: "leadership",
        accentColor: "#B45309",
        bullets: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "Selected from 1,700 students to represent LEGO Education at the ",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://sites.tufts.edu/ceeoblog/2023/06/27/joyful-learning-at-the-white-house-easter-egg-roll/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            textDecoration: 'underline',
                            color: '#B45309',
                            fontWeight: 500
                        },
                        children: "White House Easter Egg Hunt"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Experience.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    ", designing and showcasing custom LEGO robots for hands-on activities with over 35,000 attendees."
                ]
            }, void 0, true),
            "Engineered 20 custom LEGO robots equipped with sensors to activate a motor system, educating over 20,000 students.",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "Published open-source ",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://www.ceeoinnovations.org/?project=eggdecorator",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            textDecoration: 'underline',
                            color: '#B45309',
                            fontWeight: 500
                        },
                        children: "building instructions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Experience.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    " for the custom egg-decorating robots."
                ]
            }, void 0, true)
        ]
    },
    {
        id: "mexican-culture-club",
        org: "Mexican Culture Club",
        role: "Founder & President",
        dates: "Jan 2023 – Present",
        location: "Medford, MA",
        logo: "/logos/mcc.jpg",
        type: "leadership",
        accentColor: "#DC2626",
        bullets: [
            "Established a club to educate 140+ students in the Greater Boston area about Mexican traditions and culture.",
            "Initiated outreach with the Mexican consulate to foster communication across 13+ New England schools."
        ]
    }
];
const sectionMeta = {
    education: {
        label: "Education",
        description: "Degrees and coursework."
    },
    internship: {
        label: "Internships",
        description: "Industry roles."
    },
    research: {
        label: "Research",
        description: "Lab and independent projects."
    },
    campus: {
        label: "Campus Roles",
        description: "Teaching, making, and community at Tufts."
    },
    leadership: {
        label: "Leadership",
        description: "Organizations I started or led."
    }
};
const sectionOrder = [
    "education",
    "internship",
    "research",
    "campus",
    "leadership"
];
// ─── Timeline Entry ───────────────────────────────────────────────────────────
function TimelineEntry({ entry }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tl-entry",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tl-dot",
                style: {
                    background: entry.accentColor
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Experience.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tl-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "tl-card__header",
                        onClick: ()=>setOpen((o)=>!o),
                        "aria-expanded": open,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-card__left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tl-card__monogram",
                                        style: {
                                            background: entry.accentColor + "18",
                                            color: entry.accentColor,
                                            borderColor: entry.accentColor + "30"
                                        },
                                        children: entry.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: entry.logo,
                                            alt: entry.org,
                                            className: "tl-card__logo-img"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Experience.tsx",
                                            lineNumber: 326,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: entry.org.charAt(0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Experience.tsx",
                                            lineNumber: 328,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Experience.tsx",
                                        lineNumber: 321,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tl-card__meta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "tl-card__org",
                                                children: entry.org
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Experience.tsx",
                                                lineNumber: 332,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "tl-card__role",
                                                children: entry.role
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Experience.tsx",
                                                lineNumber: 333,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "tl-card__dates",
                                                children: [
                                                    entry.dates,
                                                    " · ",
                                                    entry.location
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Experience.tsx",
                                                lineNumber: 334,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Experience.tsx",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "tl-card__chevron",
                                style: {
                                    transform: open ? "rotate(180deg)" : "rotate(0deg)"
                                },
                                width: "18",
                                height: "18",
                                viewBox: "0 0 18 18",
                                fill: "none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M4.5 6.75L9 11.25L13.5 6.75",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Experience.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 339,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Experience.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-card__body",
                        style: {
                            maxHeight: open ? "600px" : "0",
                            opacity: open ? 1 : 0,
                            overflow: "hidden",
                            transition: "max-height 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tl-card__body-inner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "tl-card__bullets",
                                    children: entry.bullets.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "tl-card__bullet",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "tl-card__bullet-dot",
                                                    style: {
                                                        background: entry.accentColor
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Experience.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: b
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Experience.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/Experience.tsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Experience.tsx",
                                    lineNumber: 359,
                                    columnNumber: 13
                                }, this),
                                entry.images && entry.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tl-card__images",
                                    children: entry.images.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: src,
                                            alt: "",
                                            className: "tl-card__image"
                                        }, i, false, {
                                            fileName: "[project]/src/components/Experience.tsx",
                                            lineNumber: 371,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Experience.tsx",
                                    lineNumber: 369,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Experience.tsx",
                            lineNumber: 358,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Experience.tsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Experience.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Experience.tsx",
        lineNumber: 307,
        columnNumber: 5
    }, this);
}
function Experience() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "exp-page",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "exp-header",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "exp-header__inner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "exp-header__eyebrow",
                                children: "Background"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 392,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "exp-header__title",
                                children: "Experience"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 393,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "exp-header__sub",
                                children: "Internships, research, and roles that shaped how I build - across robotics, manufacturing, and education."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 394,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Experience.tsx",
                        lineNumber: 391,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Experience.tsx",
                    lineNumber: 390,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "exp-main",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "exp-main__inner",
                        children: sectionOrder.map((type)=>{
                            const entries = experiences.filter((e)=>e.type === type);
                            const meta = sectionMeta[type];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "exp-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "exp-section__label",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "exp-section__heading",
                                                children: meta.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Experience.tsx",
                                                lineNumber: 411,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "exp-section__desc",
                                                children: meta.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Experience.tsx",
                                                lineNumber: 412,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Experience.tsx",
                                        lineNumber: 410,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "exp-timeline",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "exp-timeline__line"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Experience.tsx",
                                                lineNumber: 417,
                                                columnNumber: 21
                                            }, this),
                                            entries.map((entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineEntry, {
                                                    entry: entry
                                                }, entry.id, false, {
                                                    fileName: "[project]/src/components/Experience.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 23
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Experience.tsx",
                                        lineNumber: 416,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, type, true, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 408,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/Experience.tsx",
                        lineNumber: 402,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Experience.tsx",
                    lineNumber: 401,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Experience.tsx",
            lineNumber: 387,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/src/components/FeaturedCarousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturedCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProjects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProjects.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function FeaturedCarousel() {
    const { projects, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProjects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjects"])();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [touchStart, setTouchStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const featuredProjects = projects.filter((p)=>p.is_featured).sort((a, b)=>a.display_order - b.display_order);
    const nextSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setActiveIndex((current)=>current === featuredProjects.length - 1 ? 0 : current + 1);
    }, [
        featuredProjects.length
    ]);
    const prevSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setActiveIndex((current)=>current === 0 ? featuredProjects.length - 1 : current - 1);
    }, [
        featuredProjects.length
    ]);
    // Mobile swipe handling
    const handleTouchStart = (e)=>{
        setTouchStart(e.targetTouches[0].clientX);
    };
    const handleTouchEnd = (e)=>{
        if (touchStart === null) return;
        const touchEnd = e.changedTouches[0].clientX;
        const distance = touchStart - touchEnd;
        if (distance > 50) nextSlide(); // Swipe left
        if (distance < -50) prevSlide(); // Swipe right
        setTouchStart(null);
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex-1 min-h-[350px] rounded-xl border border-border bg-card animate-pulse flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-muted-foreground",
            children: "Loading highlights..."
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturedCarousel.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/FeaturedCarousel.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
    if (featuredProjects.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative w-full flex-1 min-h-[350px] rounded-xl overflow-hidden border border-border",
        style: {
            background: "hsl(var(--card))"
        },
        onMouseEnter: ()=>setIsPaused(true),
        onMouseLeave: ()=>setIsPaused(false),
        onTouchStart: handleTouchStart,
        onTouchEnd: handleTouchEnd,
        children: [
            featuredProjects.map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 transition-opacity duration-500 ${i === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`,
                    children: [
                        project.gif_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: project.gif_url,
                            alt: project.title,
                            className: "w-full h-full object-contain",
                            loading: i === activeIndex ? "eager" : "lazy"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturedCarousel.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: project.images?.[0] || "/placeholder.png",
                            alt: project.title,
                            fill: true,
                            sizes: "(max-width: 768px) 100vw, 50vw",
                            className: "object-contain",
                            priority: i === activeIndex
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturedCarousel.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-0 right-0 p-6 pointer-events-none",
                            style: {
                                background: "linear-gradient(to top, hsl(var(--card)) 0%, transparent 100%)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[0.65rem] uppercase tracking-widest font-bold mb-1 opacity-70",
                                    children: project.tags[0] || "Featured"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FeaturedCarousel.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base font-bold",
                                    children: project.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FeaturedCarousel.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FeaturedCarousel.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, project.id, true, {
                    fileName: "[project]/src/components/FeaturedCarousel.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: prevSlide,
                className: "absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-background/40 hover:bg-background/80 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center",
                "aria-label": "Previous highlight",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturedCarousel.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturedCarousel.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: nextSlide,
                className: "absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-background/40 hover:bg-background/80 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center",
                "aria-label": "Next highlight",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturedCarousel.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturedCarousel.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-6 right-6 z-30 flex gap-1.5",
                children: featuredProjects.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveIndex(i),
                        className: `h-1.5 rounded-full transition-all duration-200 ${i === activeIndex ? "w-6 bg-foreground" : "w-1.5 bg-foreground/20"}`,
                        "aria-label": `Go to slide ${i + 1}`
                    }, i, false, {
                        fileName: "[project]/src/components/FeaturedCarousel.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturedCarousel.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FeaturedCarousel.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navigation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProjects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProjects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Experience$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Experience.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FeaturedCarousel.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
// ─── Main page ────────────────────────────────────────────────────────────────
function HomePage() {
    const { projects, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProjects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjects"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const projectsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Scroll to projects section when ?scrollTo=projects
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (searchParams.get("scrollTo") === "projects" && projectsRef.current) {
            projectsRef.current.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [
        searchParams
    ]);
    // Only show featured projects on homepage
    const featuredProjects = projects.filter((p)=>p.is_featured).sort((a, b)=>a.display_order - b.display_order);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "w-5 h-5 animate-spin text-muted-foreground"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: [
                    "Could not load projects - ",
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pg-home",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "pg-hero",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pg-hero__inner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pg-hero__left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/personal-about",
                                            className: "pg-hero__photo-link",
                                            "aria-label": "About Paul Galvan",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pg-hero__photo-wrap",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/Headshot_Paul_Galvan.jpeg",
                                                    alt: "Paul Galvan",
                                                    className: "pg-hero__photo"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pg-hero__text",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "pg-hero__eyebrow",
                                                    children: "Mechanical Engineering · Robotics & Hardware · Tufts '26"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "pg-hero__name",
                                                    children: [
                                                        "Paul",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 51
                                                        }, this),
                                                        "Galvan"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "pg-hero__bio",
                                                    children: "ME senior at Tufts building at the intersection of robotics, manufacturing, and human-centered design. Previously at P&G Gillette (saved ~$700K/yr), published robotics research, and learned engineering internationally. Seeking full-time hardware & robotics roles starting Summer 2026."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pg-hero__availability",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "pg-hero__avail-dot",
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 81,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Available · Full-time from Summer 2026"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pg-hero__right",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        ref: projectsRef,
                        id: "projects",
                        className: "pg-projects pt-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pg-projects__inner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pg-projects__header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "pg-projects__heading",
                                            children: "Featured Work"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/projects",
                                            className: "text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group flex items-center gap-1.5",
                                            children: [
                                                "All Work",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                featuredProjects.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pg-projects__empty",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "No featured projects found."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pg-grid",
                                            children: featuredProjects.map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    project: project,
                                                    index: i
                                                }, project.id, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-20 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/projects",
                                                className: "inline-flex items-center gap-2 px-8 py-4 rounded-md bg-muted/50 hover:bg-muted transition-colors text-sm font-semibold",
                                                children: [
                                                    "All Work",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Experience$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "pg-contact",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pg-contact__inner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "pg-contact__label",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "pg-contact__heading",
                                    children: "Looking for hardware & robotics roles starting Summer 2026"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pg-contact__actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            id: "contact-email-cta",
                                            href: "mailto:paul.galvan@tufts.edu",
                                            className: "pg-hero__btn pg-hero__btn--primary",
                                            children: "Email me"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.linkedin.com/in/paul-galvan/",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "pg-hero__btn pg-hero__btn--outline",
                                            children: "LinkedIn"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        /* ── Page shell ── */
        .exp-page {
          min-height: 100vh;
          background: hsl(var(--background));
        }
        /* ── Header ── */
        .exp-header {
          padding: 120px 24px 64px;
          border-bottom: 1px solid hsl(var(--border));
        }
        .exp-header__inner {
          max-width: 760px;
          margin: 0 auto;
        }
        .exp-header__eyebrow {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin: 0 0 16px;
        }
        .exp-header__title {
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1;
          color: hsl(var(--foreground));
          margin: 0 0 20px;
        }
        .exp-header__sub {
          font-size: 1.05rem;
          line-height: 1.7;
          color: hsl(var(--muted-foreground));
          max-width: 540px;
          margin: 0;
        }
        /* ── Main ── */
        .exp-main {
          padding: 80px 24px 120px;
        }
        .exp-main__inner {
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 64px;
        }
        /* ── Section ── */
        .exp-section__label {
          margin-bottom: 24px;
        }
        .exp-section__heading {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin: 0 0 6px;
        }
        .exp-section__desc {
          font-size: 0.875rem;
          color: hsl(var(--muted-foreground) / 0.7);
          margin: 0;
          font-style: italic;
        }
        /* ── Timeline track ── */
        .exp-timeline {
          position: relative;
          padding-left: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .exp-timeline__line {
          position: absolute;
          left: 7px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: hsl(var(--border));
          border-radius: 2px;
        }
        /* ── Timeline entry ── */
        .tl-entry {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 0;
        }
        /* Dot */
        .tl-dot {
          position: absolute;
          left: -28px;
          top: 20px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2.5px solid hsl(var(--background));
          box-shadow: 0 0 0 2px hsl(var(--border));
          flex-shrink: 0;
          z-index: 1;
        }
        .tl-card {
          width: 100%;
          border: 1px solid hsl(var(--border) / 0.3);
          border-radius: 4px;
          background: hsl(var(--card));
          overflow: hidden;
          transition: border-color 0.2s ease, background-color 0.2s ease;
        }
        .tl-card:hover {
          border-color: hsl(var(--border) / 0.8);
          background: hsl(var(--muted) / 0.05);
        }
        .tl-card__header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 22px;
          gap: 16px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }
        .tl-card__left {
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: 0;
        }
        .tl-card__monogram {
          width: 52px;
          height: 52px;
          border-radius: 6px;
          border: 1px solid hsl(var(--border) / 0.5);
          background: hsl(var(--muted) / 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
        }
        .tl-card__logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: grayscale(1);
          opacity: 0.8;
          padding: 2px;
          transition: filter 0.2s, opacity 0.2s;
        }
        .tl-card:hover .tl-card__logo-img {
          filter: grayscale(0);
          opacity: 1;
        }
        .tl-card__meta {
          min-width: 0;
        }
        .tl-card__org {
          font-size: 0.95rem;
          font-weight: 600;
          color: hsl(var(--foreground));
          margin: 0 0 2px;
          line-height: 1.3;
        }
        .tl-card__role {
          font-size: 0.85rem;
          color: hsl(var(--muted-foreground));
          margin: 0 0 3px;
        }
        .tl-card__dates {
          font-size: 0.75rem;
          color: hsl(var(--muted-foreground) / 0.7);
          margin: 0;
          letter-spacing: 0.01em;
        }
        /* Chevron */
        .tl-card__chevron {
          color: hsl(var(--muted-foreground));
          flex-shrink: 0;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), color 0.2s ease;
        }
        .tl-card__header:hover .tl-card__chevron {
          color: hsl(var(--foreground));
        }
        /* Accordion body */
        .tl-card__body-inner {
          padding: 0 22px 22px;
          border-top: 1px solid hsl(var(--border));
          padding-top: 18px;
        }
        /* Bullets */
        .tl-card__bullets {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .tl-card__bullet {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.875rem;
          line-height: 1.65;
          color: hsl(var(--muted-foreground));
        }
        .tl-card__bullet-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 7px;
        }
        /* Images */
        .tl-card__images {
          display: flex;
          gap: 10px;
          margin-top: 18px;
          flex-wrap: wrap;
        }
        .tl-card__image {
          width: calc(50% - 5px);
          border-radius: 8px;
          object-fit: cover;
          aspect-ratio: 16/10;
          border: 1px solid hsl(var(--border));
        }
        /* ── Responsive ── */
        @media (max-width: 600px) {
          .exp-header { padding: 96px 20px 48px; }
          .exp-main { padding: 60px 20px 96px; }
          .tl-card__header { padding: 16px 16px; }
          .tl-card__body-inner { padding: 0 16px 16px; padding-top: 14px; }
          .tl-card__image { width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .tl-entry, .tl-card, .tl-card__chevron {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
        /* ── Layout shell ── */
        .pg-home {
          min-height: 100vh;
          background: hsl(var(--background));
        }
        
        .pg-hero {
          padding: 120px 24px 60px;
          display: flex;
          align-items: center;
        }
        .pg-hero__inner {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          align-items: stretch;
          gap: 60px;
        }
        .pg-hero__left {
          width: 45%;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
        .pg-hero__right {
          width: 55%;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        
        .pg-hero__photo-link {
          display: inline-block;
          margin-bottom: 12px;
        }
        .pg-hero__photo-wrap {
          width: 200px;
          height: 240px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid hsl(var(--border));
          transition: opacity 0.2s ease;
        }
        .pg-hero__photo-link:hover .pg-hero__photo-wrap {
          opacity: 0.9;
        }
        .pg-hero__photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 20%;
          display: block;
        }
        .pg-hero__text { min-width: 0; }
        .pg-hero__eyebrow {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin: 0 0 18px;
        }
        .pg-hero__name {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.04em;
          color: hsl(var(--foreground));
          margin: 0 0 20px;
        }
        .pg-hero__bio {
          font-size: 1.05rem;
          line-height: 1.7;
          color: hsl(var(--muted-foreground));
          max-width: 480px;
          margin: 0 0 20px;
        }
        /* Availability badge */
        .pg-hero__availability {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 500;
          color: hsl(142 60% 38%);
          background: hsl(142 60% 38% / 0.1);
          border: 1px solid hsl(142 60% 38% / 0.25);
          border-radius: 100px;
          padding: 5px 14px 5px 10px;
          margin-bottom: 28px;
          letter-spacing: 0.01em;
        }
        .pg-hero__avail-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: hsl(142 60% 38%);
          flex-shrink: 0;
        }
        .pg-hero__actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }
        .pg-hero__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 24px;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          border: none;
          background: none;
        }
        .pg-hero__btn--primary {
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
        }
        .pg-hero__btn--primary:hover {
          background: hsl(var(--primary) / 0.88);
        }
        .pg-hero__btn--outline {
          border: 1.5px solid hsl(var(--border));
          color: hsl(var(--foreground));
          background: transparent;
        }
        .pg-hero__btn--outline:hover {
          border-color: hsl(var(--primary));
          color: hsl(var(--primary));
          background: hsl(var(--primary) / 0.05);
        }
        .pg-hero__btn--ghost {
          color: hsl(var(--muted-foreground));
          padding-left: 0;
          padding-right: 0;
        }
        .pg-hero__btn--ghost:hover {
          color: hsl(var(--foreground));
        }
        /* ── Contact Strip ── */
        .pg-contact {
          padding: 80px 24px 80px;
          border-top: 1px solid hsl(var(--border));
          text-align: center;
        }
        .pg-contact__inner {
          max-width: 640px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .pg-contact__label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin: 0;
        }
        .pg-contact__heading {
          font-size: clamp(1.5rem, 3.5vw, 2.4rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.2;
          color: hsl(var(--foreground));
          margin: 0;
        }
        .pg-projects {
          padding: 0 24px 96px;
        }
        .pg-projects__inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .pg-projects__header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 32px;
          padding-bottom: 20px;
          border-bottom: 1px solid hsl(var(--border));
        }
        .pg-projects__heading {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin: 0;
        }
        .pg-projects__clear {
          font-size: 0.8rem;
          color: hsl(var(--muted-foreground));
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s;
        }
        .pg-projects__clear:hover {
          color: hsl(var(--foreground));
        }
        /* ── Tag pills ── */
        .pg-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 48px;
        }
        .tag-pill {
          font-size: 0.78rem;
          font-weight: 500;
          padding: 5px 12px;
          border-radius: 4px;
          border: 1px solid hsl(var(--border));
          background: transparent;
          color: hsl(var(--muted-foreground));
          cursor: pointer;
          transition: color 0.15s, border-color 0.15s;
        }
        .tag-pill:hover {
          border-color: hsl(var(--foreground) / 0.4);
          color: hsl(var(--foreground));
        }
        .tag-pill--active {
          border-color: hsl(var(--primary));
          background: hsl(var(--primary) / 0.06);
          color: hsl(var(--primary));
        }
        /* ── Grid ── */
        .pg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: stretch;
        }
        /* Empty state */
        .pg-projects__empty {
          padding: 80px 0;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          color: hsl(var(--muted-foreground));
          font-size: 0.95rem;
        }
        
        /* ── Responsive Hero & Grid ── */
        @media (max-width: 1024px) {
          .pg-hero {
            padding: 100px 24px 60px;
            min-height: auto;
          }
          .pg-hero__inner {
            flex-direction: column;
            gap: 48px;
          }
          .pg-hero__left {
            width: 100%;
            align-items: center;
            text-align: center;
          }
          .pg-hero__right {
            width: 100%;
          }
          .pg-hero__bio {
            margin: 0 auto 32px;
          }
          .pg-hero__actions {
            justify-content: center;
          }
          .pg-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
        @media (max-width: 600px) {
          .pg-hero {
            padding: 96px 20px 48px;
          }
          .pg-grid {
            grid-template-columns: 1fr;
          }
          .pg-grid > :first-child {
            grid-column: span 1;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .pg-hero__btn,
          .pg-hero__photo-wrap,
          .tag-pill {
            transition: none;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "w-5 h-5 animate-spin text-muted-foreground"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 734,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 733,
            columnNumber: 9
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HomePage, {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 738,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 731,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_0y10h_7._.js.map