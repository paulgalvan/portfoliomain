import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface TagFilterProps {
  availableTags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  onClearAll: () => void;
}

const TagFilter = ({ availableTags, selectedTags, onTagToggle, onClearAll }: TagFilterProps) => {
  const getTagClassName = (tag: string) => {
    const baseClass = "lego-brick cursor-pointer select-none";
    
    switch (tag.toLowerCase()) {
      case "lego":
        return `${baseClass} lego-red`;
      default:
        return `${baseClass} no-bumps bg-secondary text-secondary-foreground`;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Clear all button */}
      {selectedTags.length > 0 && (
        <div className="flex justify-center mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={onClearAll}
            className="gap-2"
          >
            <X className="w-4 h-4" />
            Clear All Filters
          </Button>
        </div>
      )}

      {/* Available tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {availableTags.map((tag) => (
          <div
            key={tag}
            className={`${getTagClassName(tag)} ${
              selectedTags.includes(tag) 
                ? "ring-2 ring-ring ring-offset-2" 
                : ""
            }`}
            onClick={() => onTagToggle(tag)}
          >
            {tag === "lego" && "🧱 "}
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </div>
        ))}
      </div>

      {/* Selected tags display */}
      {selectedTags.length > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Filtering by: {selectedTags.length} tag{selectedTags.length !== 1 ? 's' : ''}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {selectedTags.map((tag) => (
              <Badge key={tag} variant="secondary" className="gap-1">
                {tag}
                <X 
                  className="w-3 h-3 cursor-pointer hover:text-destructive" 
                  onClick={() => onTagToggle(tag)}
                />
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TagFilter;