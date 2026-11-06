import React, { useState } from 'react';
import { architectureDocs, ArchitectureDoc } from '../data/architectureDocs';
import { 
  FileCode2, 
  BookOpen, 
  Server, 
  FolderTree, 
  Database, 
  Layers, 
  ShieldCheck, 
  Lock, 
  Cpu, 
  Layout, 
  Milestone, 
  Cloud,
  CheckCircle2,
  Copy
} from 'lucide-react';

interface ArchitectureDocsViewProps {
  darkMode: boolean;
}

export const ArchitectureDocsView: React.FC<ArchitectureDocsViewProps> = ({ darkMode }) => {
  const [selectedDocId, setSelectedDocId] = useState<string>(architectureDocs[0].id);
  const [copied, setCopied] = useState(false);

  const selectedDoc = architectureDocs.find(d => d.id === selectedDocId) || architectureDocs[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedDoc.markdownContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getDocIcon = (id: string) => {
    switch (id) {
      case 'prd': return BookOpen;
      case 'system-arch': return Server;
      case 'folder-structure': return FolderTree;
      case 'db-schema': return Database;
      case 'api-design': return Layers;
      case 'multi-tenant': return ShieldCheck;
      case 'auth-flow': return Lock;
      case 'pairing-flow': return Cpu;
      case 'player-arch': return Cpu;
      case 'ui-wireframes': return Layout;
      case 'roadmap': return Milestone;
      case 'deployment': return Cloud;
      default: return FileCode2;
    }
  };

  return (
    <div className="p-6 �ۧq˞�