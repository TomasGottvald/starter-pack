import React from "react";
import initUrql from "./init-urql";
import Head from "next/head";
import ssrPrepass from "react-ssr-prepass";

export default App => {
  return class Urql extends React.Component {
    static displayName = "withUrql(App)";
    static async getInitialProps(ctx) {
      const { Component, router } = ctx;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      const urql = initUrql();
      if (!process.browser) {
        try {
          await ssrPrepass(
            <App
              {...appProps}
              Component={Component}
              router={router}
              urqlClient={urql.client}
            />
          );
        } catch (error) {
          console.error("Error while running `ssrPrepass`", error);
        }

        Head.rewind();
      }

      const urqlState = urql.ssrCache.extractData();
      //const errors = urql.errorHandler.extractGraphqlErrors();

      return {
        ...appProps,
        urqlState
      };
    }

    constructor(props) {
      super(props);
      this.urql = initUrql(props.urqlState);
    }

    render() {
      return <App {...this.props} urqlClient={this.urql.client} />;
    }
  };
};
