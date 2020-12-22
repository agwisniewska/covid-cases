import React, {FunctionComponent, useEffect, useState} from 'react';
import {useCasesState} from "../../context";
import Autosuggest, { SuggestionsFetchRequestedParams, OnSuggestionSelected , RenderSuggestion, GetSuggestionValue, OnSuggestionsClearRequested, RenderInputComponent, InputProps, ChangeEvent, RenderSuggestionsContainer, RenderSuggestionsContainerParams } from 'react-autosuggest';
import {useSearchDispatch, useSearchState} from '../../context/search-context';
import {CovidCase} from '../../features';
import "./search.scss";

const renderInputComponent: RenderInputComponent<string> = (inputProps: InputProps<string>) => {
  //  TODO: Verify how to change it (is it possible to do it easily?) (the problem here that onChange type in inputProps is different than onChange in standard HTMLInput)
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    inputProps.onChange(event, { newValue: event.target.value, method: 'type' });
  };

  return (
  <div className="input-group">
    <input {...inputProps} onChange={onChangeHandler} type="text" className="form-control" aria-label="Country" aria-describedby="inputGroup-sizing-default"/>
  </div>
  )
};

const renderSuggestionsContainer: RenderSuggestionsContainer = ({ containerProps, children, query }: RenderSuggestionsContainerParams) => {
  if (!children) {
    return null;
  }
  return (<ul {...containerProps} className="list-group" >
         <li className="list-group-item" > {children} </li>
    </ul>);
}

export const Search: FunctionComponent = () => {
  const {data} = useCasesState();
  
  const dispatch = useSearchDispatch();
  const search = useSearchState();

  const [countries, setCountries] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  
  const [innerValue, setInnerValue] = useState('');

  useEffect(() => {
    const countries = data?.map((covidCase: CovidCase) => covidCase.Country);
    setCountries(countries);
}, [data])

  useEffect(() => {
    setInnerValue(search);
  }, [search])

  const getSuggestions = (value: string) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : countries.filter((lang: any) =>
      lang.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  const onSuggestionsFetchRequested = ({ value, reason }: SuggestionsFetchRequestedParams) => {
    setSuggestions(getSuggestions(value));
  }

  const onSuggestionsClearRequested: OnSuggestionsClearRequested = () => setSuggestions([]);

  const getSuggestionValue: GetSuggestionValue<string> = (suggestion: string) => suggestion;

  const renderSuggestion: RenderSuggestion<string> = (suggestion: string) => (
    <div>
      {suggestion}
    </div>
  );

  const onChange = (event: React.FormEvent<any>, {newValue}: ChangeEvent) => {
    event.preventDefault()
    setInnerValue(newValue);
    if (newValue === '') {
      dispatch(newValue)
    }
  }

  const onSuggestionSelected: OnSuggestionSelected<string> = (event, { suggestion, suggestionValue }) => {
    dispatch(suggestionValue);
    setInnerValue(suggestionValue);
  }

  const inputProps = {
    placeholder: 'Type a country',
    value: innerValue,
    onChange,
  };

  //  TODO: Added styles to autosuggestions
  return (
      <Autosuggest    suggestions={suggestions}
                      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                      getSuggestionValue={getSuggestionValue}
                      renderSuggestion={renderSuggestion}
                      onSuggestionSelected={onSuggestionSelected}
                      onSuggestionsClearRequested={onSuggestionsClearRequested}
                      renderInputComponent={renderInputComponent}
                      renderSuggestionsContainer={renderSuggestionsContainer}
                      inputProps={inputProps}
      />
  )
}