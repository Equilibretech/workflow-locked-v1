import { useState } from 'react';
import { 
  Code2, 
  MessageSquare, 
  Shield, 
  Rocket, 
  GraduationCap,
  Copy,
  Check,
  Play,
  ChevronDown
} from 'lucide-react';
import { cn } from '../lib/utils';

type ClaudeRole = 'dev' | 'review' | 'devops' | 'coach';

interface RoleConfig {
  id: ClaudeRole;
  label: string;
  icon: React.ReactNode;
  description: string;
  prompt: string;
}

const roles: RoleConfig[] = [
  {
    id: 'dev',
    label: 'Développeur',
    icon: <Code2 className="w-5 h-5" />,
    description: 'Implémenter des fonctionnalités',
    prompt: '/tdd-feature'
  },
  {
    id: 'review',
    label: 'Code Reviewer',
    icon: <MessageSquare className="w-5 h-5" />,
    description: 'Analyser la qualité du code',
    prompt: '/multi-review'
  },
  {
    id: 'devops',
    label: 'DevOps',
    icon: <Shield className="w-5 h-5" />,
    description: 'Déploiement et infrastructure',
    prompt: '/deploy'
  },
  {
    id: 'coach',
    label: 'Coach',
    icon: <GraduationCap className="w-5 h-5" />,
    description: 'Conseils et bonnes pratiques',
    prompt: '/context-refresh'
  }
];

export function IAWorkbench() {
  const [task, setTask] = useState('');
  const [selectedRole, setSelectedRole] = useState<ClaudeRole>('dev');
  const [showExpertMode, setShowExpertMode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<Array<{ role: string; task: string; command: string }>>([]);

  const currentRole = roles.find(r => r.id === selectedRole)!;

  const generateCommand = () => {
    let command = `claude-code "${currentRole.prompt}"`;
    
    if (selectedRole === 'dev' && task) {
      command = `claude-code "/tdd-feature ${task.split(' ').slice(0, 3).join('-').toLowerCase()}"`;
    } else if (selectedRole === 'devops') {
      command = `claude-code "/deploy staging"`;
    }
    
    return command;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCommand());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExecute = () => {
    const command = generateCommand();
    const newHistory = {
      role: currentRole.label,
      task: task || 'Tâche par défaut',
      command
    };
    
    setHistory([newHistory, ...history.slice(0, 9)]);
    
    // Dans un vrai environnement, ouvrirait le terminal
    alert(`Commande à exécuter dans votre terminal:\n\n${command}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Rocket className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            IA Workbench
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Générez des commandes Claude optimisées
          </p>
        </div>
      </div>

      {/* Sélecteur de rôle */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Choisissez le rôle de Claude
        </label>
        <div className="grid grid-cols-2 gap-3">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={cn(
                "flex items-center space-x-3 p-4 border rounded-lg transition-all",
                "hover:bg-gray-50 dark:hover:bg-gray-700",
                selectedRole === role.id
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-300 dark:border-gray-600"
              )}
            >
              <div className={cn(
                "p-2 rounded-lg",
                selectedRole === role.id
                  ? "bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-400"
                  : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
              )}>
                {role.icon}
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-900 dark:text-white">
                  {role.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {role.description}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Champ de tâche */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Décrivez votre tâche
        </label>
        <textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Ex: Créer un système d'authentification avec JWT..."
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
        />
      </div>

      {/* Aperçu de la commande */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Commande générée
          </label>
          <button
            onClick={() => setShowExpertMode(!showExpertMode)}
            className="flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            Mode expert
            <ChevronDown className={cn(
              "ml-1 h-4 w-4 transition-transform",
              showExpertMode && "rotate-180"
            )} />
          </button>
        </div>
        
        <div className="relative">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
            {generateCommand()}
          </div>
          
          <div className="absolute top-2 right-2 flex space-x-2">
            <button
              onClick={handleCopy}
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded transition-colors"
              title="Copier"
            >
              {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
            </button>
            <button
              onClick={handleExecute}
              className="p-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors"
              title="Exécuter"
            >
              <Play className="h-4 w-4" />
            </button>
          </div>
        </div>

        {showExpertMode && (
          <div className="mt-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h4 className="font-medium text-sm text-gray-700 dark:text-gray-300 mb-2">
              Détails du prompt engineering
            </h4>
            <pre className="text-xs text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
{`Rôle: ${currentRole.label}
Commande de base: ${currentRole.prompt}
Contexte projet: ${task || 'Non spécifié'}

Cette commande va:
1. Activer le mode ${currentRole.label} de Claude
2. Appliquer les bonnes pratiques DevFoundation
3. Générer du code avec tests et documentation`}
            </pre>
          </div>
        )}
      </div>

      {/* Historique */}
      {history.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Historique récent
          </h3>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {history.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm"
              >
                <div className="flex-1">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {item.role}:
                  </span>{' '}
                  <span className="text-gray-600 dark:text-gray-400">
                    {item.task.substring(0, 50)}...
                  </span>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(item.command);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="ml-2 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                >
                  <Copy className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}