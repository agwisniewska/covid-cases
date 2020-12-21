import React, {FunctionComponent, useEffect, useState} from 'react';
import {useDataApi} from "../../hooks/useApi";
import Autosuggest, { SuggestionsFetchRequestedParams, OnSuggestionSelected , RenderSuggestion, GetSuggestionValue, OnSuggestionsClearRequested, RenderInputComponent, InputProps, ChangeEvent, RenderSuggestionsContainer, RenderSuggestionsContainerParams } from 'react-autosuggest';
import {useSearchDispatch} from '../../context/search-context';
import {URLS} from '../../services';

const renderInputComponent: RenderInputComponent<string> = (inputProps: InputProps<string>) => {
  //  TODO: Verify how to change it easily (the problem here that onChange type in inputProps is different than onChange in standard HTMLInput)
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    inputProps.onChange(event, { newValue: event.target.value, method: 'type' });
  };

  return (
  <div className="input-group mb-3">
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
  const [{data}] = useDataApi(URLS.SUMMARY, []);
  const [countries, setCountries] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [innerValue, setInnerValue] = useState('');
  const dispatch = useSearchDispatch();

  useEffect(() => {
    if (data && data['Countries']) {
      const inner = data['Countries'].map((country:any) => country.Country);
      setSuggestions(inner)
      setCountries(inner);

    }
  }, [data])

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


  const getSuggestionValue: GetSuggestionValue<string> = (suggestion) => suggestion;


  const renderSuggestion: RenderSuggestion<string> = (suggestion) => (
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
