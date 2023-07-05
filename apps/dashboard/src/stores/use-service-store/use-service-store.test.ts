import { useServiceStore } from './use-service-store';

const service = {
  company_id: '1',
  created_at: Date.now().toLocaleString(),
  description: 'lorem ipsum dolor',
  duration: '01:00',
  id: '1',
  name: 'Service Mock',
  price: 30,
  updated_at: Date.now().toLocaleString(),
};

describe('useServiceStore', () => {
  beforeEach(() => {
    const initialStoreState = useServiceStore.getState();

    useServiceStore.setState(initialStoreState, true);
  });

  it('should get service store initial state', async () => {
    const serviceStore = useServiceStore.getState();

    serviceStore.open();

    expect(useServiceStore.getState().isCreateServiceFormOpen).toBe(true);
  });

  it('should set an service to edit', async () => {
    const serviceStore = useServiceStore.getState();

    serviceStore.edit('1');

    expect(useServiceStore.getState().isCreateServiceFormOpen).toBe(true);
    expect(useServiceStore.getState().editing).toBe('1');
  });

  it('should set an service to delete', async () => {
    const serviceStore = useServiceStore.getState();

    serviceStore.remove(service);

    expect(useServiceStore.getState().isDeletingServiceModalOpen).toBe(true);
    expect(useServiceStore.getState().removing?.id).toBe(service.id);
  });

  it('should close all modals related to service', async () => {
    const serviceStore = useServiceStore.getState();

    serviceStore.close();

    expect(useServiceStore.getState().isDeletingServiceModalOpen).toBe(false);
    expect(useServiceStore.getState().removing).toBeUndefined();
  });

  it('should add and update a specific service', async () => {
    const serviceStore = useServiceStore.getState();

    serviceStore.setServices([
      {
        ...service,
        id: '2',
      },
    ]);

    serviceStore.addService(service);

    serviceStore.updateService({
      ...service,
      name: 'Service Updated',
    });

    expect(useServiceStore.getState().services.length).toBe(2);
    expect(useServiceStore.getState().services[1].name).toBe('Service Updated');
    expect(useServiceStore.getState().services[0].name).toBe(service.name);
  });
});
