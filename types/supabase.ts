export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      desires: {
        Row: {
          category: Database["public"]["Enums"]["desire_category"]
          created_at: string
          description: string | null
          id: string
          manifestation_scene: string | null
          realized_at: string | null
          send_notifications: boolean | null
          status: Database["public"]["Enums"]["desire_status"]
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          category: Database["public"]["Enums"]["desire_category"]
          created_at?: string
          description?: string | null
          id?: string
          manifestation_scene?: string | null
          realized_at?: string | null
          send_notifications?: boolean | null
          status?: Database["public"]["Enums"]["desire_status"]
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: Database["public"]["Enums"]["desire_category"]
          created_at?: string
          description?: string | null
          id?: string
          manifestation_scene?: string | null
          realized_at?: string | null
          send_notifications?: boolean | null
          status?: Database["public"]["Enums"]["desire_status"]
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "desires_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      feed_events: {
        Row: {
          created_at: string
          desire_id: string | null
          event_type: Database["public"]["Enums"]["feed_event_type"]
          id: string
          message: string | null
          realization_id: string | null
          testimonial_id: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          desire_id?: string | null
          event_type: Database["public"]["Enums"]["feed_event_type"]
          id?: string
          message?: string | null
          realization_id?: string | null
          testimonial_id?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          desire_id?: string | null
          event_type?: Database["public"]["Enums"]["feed_event_type"]
          id?: string
          message?: string | null
          realization_id?: string | null
          testimonial_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "feed_events_desire_id_fkey"
            columns: ["desire_id"]
            isOneToOne: false
            referencedRelation: "desires"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feed_events_realization_id_fkey"
            columns: ["realization_id"]
            isOneToOne: false
            referencedRelation: "realizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feed_events_testimonial_id_fkey"
            columns: ["testimonial_id"]
            isOneToOne: false
            referencedRelation: "testimonials"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feed_events_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notification_settings: {
        Row: {
          created_at: string
          enabled: boolean
          frequency: Database["public"]["Enums"]["notification_frequency"]
          id: string
          preferred_times: string[]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          enabled?: boolean
          frequency?: Database["public"]["Enums"]["notification_frequency"]
          id?: string
          preferred_times?: string[]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          enabled?: boolean
          frequency?: Database["public"]["Enums"]["notification_frequency"]
          id?: string
          preferred_times?: string[]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notification_settings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          full_name: string | null
          id: string
          updated_at: string
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          updated_at?: string
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
          username?: string | null
        }
        Relationships: []
      }
      realizations: {
        Row: {
          created_at: string
          desire_id: string
          id: string
          is_public: boolean
          story: string
        }
        Insert: {
          created_at?: string
          desire_id: string
          id?: string
          is_public?: boolean
          story: string
        }
        Update: {
          created_at?: string
          desire_id?: string
          id?: string
          is_public?: boolean
          story?: string
        }
        Relationships: [
          {
            foreignKeyName: "realizations_desire_id_fkey"
            columns: ["desire_id"]
            isOneToOne: false
            referencedRelation: "desires"
            referencedColumns: ["id"]
          },
        ]
      }
      testimonials: {
        Row: {
          created_at: string
          description: string
          id: string
          title: string
          user_id: string
          video_url: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          title: string
          user_id: string
          video_url: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          title?: string
          user_id?: string
          video_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "testimonials_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      desire_category:
        | "career"
        | "relationships"
        | "health"
        | "wealth"
        | "personal_growth"
        | "other"
      desire_status: "active" | "realized" | "archived"
      feed_event_type: "new_desire" | "desire_realized" | "testimonial_shared"
      notification_frequency: "low" | "medium" | "high"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
