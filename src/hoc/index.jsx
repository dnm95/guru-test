import React from "react";
import { connect } from "react-redux";
import { END } from "redux-saga";

const HOC = (mapStateToProps, mapDispatchToProps) => (BaseComponent, actions) => {
  class HighOrder extends React.PureComponent {
    static async getInitialProps(ctx) {
      const { store, ...rest } = ctx;
      const isServer = typeof window === "undefined";

      let action = actions && actions.type ? actions : { type: "" };
      if (actions) {
        action = actions.server || actions.client || action;
      }

      const dispatch = { ...action, isServer, query: rest.query };
      const router = {
        asPath: rest.asPath,
        pathname: rest.pathname,
        query: rest.query,
      };

      let userAgent;
      if (ctx.req) {
        userAgent = ctx.req.headers["user-agent"];
      } else {
        userAgent = navigator.userAgent;
      }

      const isMobile = Boolean(userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      ));

      if (isServer) {
        const rootTask = store.sagaTask;

        /*
        store.dispatch(injectGlobals(isMobile, null));
        store.dispatch(getCategories());
        */

        store.dispatch(dispatch);
        store.dispatch(END);
        await rootTask.toPromise().then();
      } else {
        store.dispatch(dispatch);
      }

      const pageProps = BaseComponent.getInitialProps
        ? await BaseComponent.getInitialProps(ctx)
        : {};

      return {
        ...pageProps,
        router,
        isMobile,
      };
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }

  const superMapStateToProps = state => ({
    ...(mapStateToProps ? mapStateToProps(state) : {}),
  });

  return connect(superMapStateToProps, mapDispatchToProps)(HighOrder);
};

export default HOC;
