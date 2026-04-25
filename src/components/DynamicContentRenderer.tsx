'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface DynamicContentRendererProps {
  htmlContent: string;
}

const DynamicContentRenderer: React.FC<DynamicContentRendererProps> = ({ htmlContent }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [renderedContent, setRenderedContent] = useState<React.ReactNode>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create a temporary div to parse the HTML string
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;

    const elementsToRender: React.ReactNode[] = [];
    let currentText = '';

    // Iterate through child nodes to find custom code blocks
    Array.from(tempDiv.childNodes).forEach((node, index) => {
      if (node.nodeType === Node.ELEMENT_NODE && (node as HTMLElement).dataset.accordionCodeBlock === 'true') {
        // If there's accumulated text before this code block, render it
        if (currentText.trim().length > 0) {
          elementsToRender.push(<div key={`text-${index}-before`} dangerouslySetInnerHTML={{ __html: currentText }} />);
          currentText = '';
        }

        const codeBlockElement = node as HTMLElement;
        const lang = codeBlockElement.dataset.codeLang || 'text';
        const title = codeBlockElement.dataset.codeTitle || `Code (${lang})`;
        const codeContent = codeBlockElement.querySelector('pre code')?.textContent || '';

        elementsToRender.push(
          <Accordion type="single" collapsible key={`accordion-${index}`} className="w-full my-4">
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="font-bold">{title}</AccordionTrigger>
              <AccordionContent>
                <pre className="overflow-x-auto p-4 rounded-md bg-gray-800 text-white">
                  <code className={`language-${lang}`}>{codeContent}</code>
                </pre>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      } else {
        // Accumulate text/non-code-block HTML
        currentText += (node as Element).outerHTML || node.textContent || '';
      }
    });

    // Render any remaining accumulated text
    if (currentText.trim().length > 0) {
      elementsToRender.push(<div key={`text-final`} dangerouslySetInnerHTML={{ __html: currentText }} />);
    }

    setRenderedContent(elementsToRender);
  }, [htmlContent]);

  return <div ref={containerRef}>{renderedContent}</div>;
};

export default DynamicContentRenderer;