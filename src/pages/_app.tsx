import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../store/store';
import {Provider} from "react-redux";
import Head from "next/head";
import {useRemResize} from "../hooks/useRemResize";
import Container from "../components/other/Container/Container";

export default function App({ Component, pageProps, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)
  const dispatch = store.dispatch;
  return (
    <Provider store={store}>
      <Head>
        <title>Good Hunting</title>
      </Head>
      <div id={"app"}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </div>
    </Provider>
  )
}
