import {NativeBaseProvider} from 'native-base';
import {Navigation} from 'navigation';
import {IComponentWithChildren} from 'types';

import {queryClient} from 'config/react-query';
import {QueryClientProvider} from 'react-query';

const Providers = ({children}: IComponentWithChildren) => {
  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <Navigation>{children}</Navigation>;
      </QueryClientProvider>
    </NativeBaseProvider>
  );
};

export default Providers;
