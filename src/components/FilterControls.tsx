import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";

interface FilterControlsProps {
  selectedYear: string;
  selectedState: string;
  onYearChange: (year: string) => void;
  onStateChange: (state: string) => void;
}

const YEARS = ["2024", "2023", "2022", "2021", "2020"];
const STATES = [
  "All States",
  "Maharashtra",
  "Rajasthan",
  "Karnataka",
  "Gujarat",
  "Tamil Nadu",
  "Uttar Pradesh",
  "Punjab",
  "Haryana",
  "Andhra Pradesh",
  "Telangana"
];

const FilterControls = ({ selectedYear, selectedState, onYearChange, onStateChange }: FilterControlsProps) => {
  return (
    <div className="bg-card rounded-xl shadow-card p-6 border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-4">Filters</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="year">Select Year</Label>
          <Select value={selectedYear} onValueChange={onYearChange}>
            <SelectTrigger id="year">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {YEARS.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="state">Select State</Label>
          <Select value={selectedState} onValueChange={onStateChange}>
            <SelectTrigger id="state">
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              {STATES.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;
