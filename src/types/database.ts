export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          avatar_url: string | null
          bio: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          icon: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          icon?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          icon?: string | null
          created_at?: string
        }
      }
      stores: {
        Row: {
          id: string
          name: string
          slug: string
          logo_url: string | null
          website: string | null
          affiliate_code: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          logo_url?: string | null
          website?: string | null
          affiliate_code?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          logo_url?: string | null
          website?: string | null
          affiliate_code?: string | null
          created_at?: string
        }
      }
      deals: {
        Row: {
          id: string
          title: string
          description: string | null
          original_price: number | null
          discount_price: number | null
          discount_percentage: number | null
          affiliate_link: string
          image_url: string | null
          store_id: string | null
          category_id: string | null
          user_id: string | null
          expires_at: string | null
          is_active: boolean
          is_featured: boolean
          view_count: number
          click_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          original_price?: number | null
          discount_price?: number | null
          discount_percentage?: number | null
          affiliate_link: string
          image_url?: string | null
          store_id?: string | null
          category_id?: string | null
          user_id?: string | null
          expires_at?: string | null
          is_active?: boolean
          is_featured?: boolean
          view_count?: number
          click_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          original_price?: number | null
          discount_price?: number | null
          discount_percentage?: number | null
          affiliate_link?: string
          image_url?: string | null
          store_id?: string | null
          category_id?: string | null
          user_id?: string | null
          expires_at?: string | null
          is_active?: boolean
          is_featured?: boolean
          view_count?: number
          click_count?: number
          created_at?: string
          updated_at?: string
        }
      }
      votes: {
        Row: {
          id: string
          deal_id: string
          user_id: string
          vote_type: 'up' | 'down'
          created_at: string
        }
        Insert: {
          id?: string
          deal_id: string
          user_id: string
          vote_type: 'up' | 'down'
          created_at?: string
        }
        Update: {
          id?: string
          deal_id?: string
          user_id?: string
          vote_type?: 'up' | 'down'
          created_at?: string
        }
      }
      comments: {
        Row: {
          id: string
          deal_id: string
          user_id: string
          content: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          deal_id: string
          user_id: string
          content: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          deal_id?: string
          user_id?: string
          content?: string
          created_at?: string
          updated_at?: string
        }
      }
      saved_deals: {
        Row: {
          id: string
          deal_id: string
          user_id: string
          created_at: string
        }
        Insert: {
          id?: string
          deal_id: string
          user_id: string
          created_at?: string
        }
        Update: {
          id?: string
          deal_id?: string
          user_id?: string
          created_at?: string
        }
      }
    }
  }
}
