import React, { useState, useRef } from 'react';
import { uploadToCloudinary } from '../lib/cloudinary';
import { Business, ContentItem, ContentType, TransitionEffect, PageContent, PageTemplateId, PAGE_THEMES } from '../types';
import { useAuth } from '../context/AuthContext';
import { can } from '../lib/permissions';
import { toYouTubeEmbedUrl } from '../lib/youtubeEmbed';
import { PageContentRenderer } from './PageContentRenderer';
import {
  FolderOpen,
  Image as ImageIcon,
  Video,
  Globe,
  Youtube,
  FileText,
  Plus,
  Trash2,
  Tag,
  Clock,
  Eye,
  Search,
  UploadCloud,
  Loader2,
  Link as LinkIcon,
  CheckCircle2,
  Megaphone,
  Tag as TagIcon,
  ListOrdered,
  Quote as QuoteIcon,
  X,
  Sparkles
} from 'lucide-react';

interface ContentLibraryViewProps {
  contents: ContentItem[];
  selectedBusiness: Business;
  onAddContent: (title: string, type: ContentType, url: string, durationSeconds: number, tags: string[], fileSizeBytes?: number, transitionEffect?: TransitionEffect, pageContent?: PageContent) => void;
  onDeleteContent: (id: string) => void;
  darkMode: boolean;
}

export const ContentLibraryView: React.FC<ContentLibraryViewProps> = ({
  contents,
  selectedBusiness,
  onAddContent,
  onDeleteContent,
  darkMode,
}) => {
  const { userProfile } = useAuth();
  const canManage = can(userProfile?.role, 'manageContent');

  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string>('ALL');�ۧq˞�