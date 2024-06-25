import { FilterByGenderForm } from "./FilterByGenderForm";
import { SearchByNameForm } from "./SearchByNameForm";
import { SortForm } from "./SortForm";

function SearchFormContainer() {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <SearchByNameForm />
      <FilterByGenderForm />
      <SortForm />
    </form>
  );
}

export default SearchFormContainer;
