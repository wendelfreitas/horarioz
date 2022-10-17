import { Bars3Icon } from '@heroicons/react/24/outline';
import { Sidebar } from '../Sidebar/Sidebar';
import { Content } from '../Content/Content';

export const Layout = () => {
  return (
    <>
      <div className="flex h-full">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="lg:hidden">
            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
              <div>
                <img
                  className="h-8 w-auto rounded-lg"
                  src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png"
                  alt="Synx"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <Content>
            <p>Hello Content</p>
          </Content>
        </div>
      </div>
    </>
  );
};
