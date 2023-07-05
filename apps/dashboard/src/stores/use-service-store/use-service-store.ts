import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Database } from '@horarioz/supabase';

/**
 * Represents a service object.
 */
type Service = Database['public']['Tables']['services']['Row'];

/**
 * Represents the state of the service store.
 */
interface ServiceState {
  /**
   * Indicates whether the create service form is open or not.
   */
  isCreateServiceFormOpen: boolean;

  isDeletingServiceModalOpen: boolean;

  /**
   * Array of service objects.
   */
  services: Service[];

  /**
   * ID of the service being edited, if any.
   */
  editing?: string | undefined;
  removing?: Service | undefined;

  /**
   * Sets the ID of the service to be edited.
   * @param id - The ID of the service.
   */
  edit: (id: string) => void;
  remove: (service: Service) => void;

  addService: (service: Service) => void;
  updateService: (service: Service) => void;
  removeService: (id: string) => void;

  /**
   * Opens the create service form.
   */
  open: () => void;

  /**
   * Closes the create service form.
   */
  close: () => void;

  /**
   * Sets the services array.
   * @param services - The new array of services.
   */
  setServices: (services: Service[]) => void;
}

/**
 * Custom hook for creating and initializing the service store.
 * @returns The service store object.
 */
export const useServiceStore = create<ServiceState>()(
  devtools(
    (set) => ({
      services: [],
      isCreateServiceFormOpen: false,
      isDeletingServiceModalOpen: false,
      edit: (id) => set(() => ({ isCreateServiceFormOpen: true, editing: id })),
      remove: (service) =>
        set(() => ({ isDeletingServiceModalOpen: true, removing: service })),
      open: () =>
        set(() => ({ isCreateServiceFormOpen: true, editing: undefined })),
      close: () =>
        set(() => ({
          isCreateServiceFormOpen: false,
          isDeletingServiceModalOpen: false,
          editing: undefined,
          removing: undefined,
        })),
      setServices: (services) => set(() => ({ services: services })),
      addService: (service) =>
        set((state) => ({
          services: [service, ...state.services],
        })),
      updateService: (service) =>
        set((state) => ({
          services: state.services.map((currentService) =>
            currentService.id === service.id ? service : currentService
          ),
        })),
      removeService: (id) =>
        set((state) => ({
          services: state.services.filter((service) => service.id !== id),
        })),
    }),
    {
      name: 'service-storage',
    }
  )
);
