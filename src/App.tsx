import React from "react";
import { Select, SelectOption } from "@patternfly/react-core";

function App() {
  return (
    <div>
      <Select
        isOpen={false}
        onToggle={() => {}}
        onSelect={() => {}}
        selections={[]}
      >
        {[<SelectOption isPlaceholder value="Select..." />]}
      </Select>
    </div>
  );
}

export default App;
