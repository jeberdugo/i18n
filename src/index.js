import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobslist";

function getLocale(){
    const lang = navigator.language;
    return lang.substring(0,2);
}


ReactDOM.render(
	<IntlProvider locale={getLocale() === 'es' ? 'es' : 'en'} messages= {getLocale() === 'es' ? localeEsMessages : localeEnMessages}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);