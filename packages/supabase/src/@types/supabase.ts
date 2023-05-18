export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      companies: {
        Row: {
          created_at: string | null;
          id: string;
          name: string | null;
          updated_at: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          name?: string | null;
          updated_at?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          name?: string | null;
          updated_at?: string | null;
          user_id?: string | null;
        };
      };
      profiles: {
        Row: {
          created_at: string | null;
          id: string;
          name: string;
          phone: string;
          photo: string | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          name: string;
          phone: string;
          photo?: string | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          name?: string;
          phone?: string;
          photo?: string | null;
          updated_at?: string | null;
        };
      };
      studios: {
        Row: {
          company_id: string | null;
          created_at: string | null;
          description: string | null;
          domain: string | null;
          id: string;
          title: string | null;
          updated_at: string | null;
        };
        Insert: {
          company_id?: string | null;
          created_at?: string | null;
          description?: string | null;
          domain?: string | null;
          id?: string;
          title?: string | null;
          updated_at?: string | null;
        };
        Update: {
          company_id?: string | null;
          created_at?: string | null;
          description?: string | null;
          domain?: string | null;
          id?: string;
          title?: string | null;
          updated_at?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      create_company:
        | {
            Args: {
              name: string;
            };
            Returns: {
              created_at: string | null;
              id: string;
              name: string | null;
              updated_at: string | null;
              user_id: string | null;
            };
          }
        | {
            Args: {
              user_id: string;
              name: string;
            };
            Returns: {
              created_at: string | null;
              id: string;
              name: string | null;
              updated_at: string | null;
              user_id: string | null;
            };
          };
      create_profile: {
        Args: {
          user_id: string;
          name: string;
          phone: string;
        };
        Returns: {
          created_at: string | null;
          id: string;
          name: string;
          phone: string;
          photo: string | null;
          updated_at: string | null;
        };
      };
      create_profile_and_company_with_studio: {
        Args: {
          user_id: string;
          name: string;
          phone: string;
          company_name: string;
          company_domain: string;
        };
        Returns: {
          profile: unknown;
          company: unknown;
        }[];
      };
      create_studio: {
        Args: {
          company_id: string;
          studio_title: string;
          studio_domain: string;
        };
        Returns: {
          company_id: string | null;
          created_at: string | null;
          description: string | null;
          domain: string | null;
          id: string;
          title: string | null;
          updated_at: string | null;
        };
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
