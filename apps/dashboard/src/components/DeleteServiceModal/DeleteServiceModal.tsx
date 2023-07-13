import { useServiceStore } from '@/stores/use-service-store/use-service-store';
import { useDeleteService } from '@horarioz/hooks';
import { Database } from '@horarioz/supabase';
import { Modal, Button } from '@horarioz/ui';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

type DeleteServiceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  service?: Database['public']['Tables']['services']['Row'];
};

export const DeleteServiceModal = ({
  isOpen,
  onClose,
  service,
}: DeleteServiceModalProps) => {
  const { t } = useTranslation();
  const { removeService } = useServiceStore((state) => state);
  const { mutate: deleteService, isLoading } = useDeleteService(service?.id, {
    onSuccess: ({ data }) => {
      if (data?.id) {
        removeService(data?.id);
        toast.success(
          t('@DeleteServiceModal.deleted-successfully', {
            name: service?.name,
          })
        );
        onClose();
      }
    },
  });

  return (
    <Modal
      type="error"
      title={t('@DeleteServiceModal.delete-service-title')}
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <div className="space-x-2 flex">
          <Button size="small" variant="secondary" onClick={onClose}>
            {t('@DeleteServiceModal.cancel')}
          </Button>
          <Button
            size="small"
            danger
            autoFocus
            className="w-40"
            onClick={() => deleteService()}
            isLoading={isLoading}
            data-testid="confirm-delete-button"
          >
            {t('@DeleteServiceModal.delete')}
          </Button>
        </div>
      }
    >
      <small className="text-gray-500 text-sm">
        {t('@DeleteServiceModal.confirm-delete', {
          name: service?.name,
        })}
      </small>
    </Modal>
  );
};
