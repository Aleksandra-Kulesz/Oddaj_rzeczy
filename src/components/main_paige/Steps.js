import React, {Component} from 'react';
import {Step} from "./Step";

const Steps = (props) => {
  return (
      <section className="steps">
          <h2>Wystarczą 4 proste kroki</h2>
          <div className="steps_content">
              <Step text='Wybierz rzeczy'/>
              <Step text='Spakuj je'/>
              <Step text='Zdecyduj komu chcesz pomóc'/>
              <Step text='Zamów kuriera'/>
          </div>
      </section>
  )
};

export {Steps};