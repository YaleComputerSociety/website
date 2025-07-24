('use client');

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface NotebookCell {
  cell_type: 'code' | 'markdown' | 'raw';
  source: string[];
  outputs?: any[];
  execution_count?: number;
}

interface NotebookData {
  cells: NotebookCell[];
  metadata: any;
}

interface NotebookRendererProps {
  notebook: NotebookData;
}

export const NotebookRenderer = ({ notebook }: NotebookRendererProps) => {
  const [expandedCells, setExpandedCells] = useState<Set<number>>(new Set());

  const toggleCell = (index: number) => {
    const newExpanded = new Set(expandedCells);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCells(newExpanded);
  };

  const renderOutput = (output: any) => {
    if (output.output_type === 'stream') {
      return (
        <pre className="bg-black/30 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
          {output.text?.join('') || ''}
        </pre>
      );
    }

    if (output.output_type === 'execute_result' || output.output_type === 'display_data') {
      if (output.data?.['text/html']) {
        return (
          <div
            className="bg-white p-4 rounded-lg"
            dangerouslySetInnerHTML={{ __html: output.data['text/html'].join('') }}
          />
        );
      }

      if (output.data?.['text/plain']) {
        return (
          <pre className="bg-zinc-800/50 text-white p-4 rounded-lg overflow-x-auto text-sm">
            {output.data['text/plain'].join('')}
          </pre>
        );
      }

      if (output.data?.['image/png']) {
        return (
          <div className="text-center">
            <img
              src={`data:image/png;base64,${output.data['image/png']}`}
              alt="Output"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        );
      }
    }

    if (output.output_type === 'error') {
      return (
        <pre className="bg-red-900/20 text-red-400 p-4 rounded-lg overflow-x-auto text-sm border border-red-500/30">
          {output.traceback?.join('\n') || output.evalue || 'Error occurred'}
        </pre>
      );
    }

    return null;
  };

  return (
    <div className="space-y-6">
      {notebook.cells.map((cell, index) => (
        <div
          key={index}
          className="bg-zinc-800/20 rounded-xl overflow-hidden border border-zinc-700/30"
        >
          {cell.cell_type === 'markdown' && (
            <div className="p-6">
              <div className="prose prose-invert prose-lg max-w-none">
                <div
                  dangerouslySetInnerHTML={{
                    __html: cell.source.join('').replace(/\n/g, '<br/>'),
                  }}
                />
              </div>
            </div>
          )}

          {cell.cell_type === 'code' && (
            <div>
              {/* Code input header */}
              <div className="flex items-center justify-between bg-zinc-700/30 px-4 py-2 border-b border-zinc-600/30">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-white/60">
                    In [{cell.execution_count || ' '}]:
                  </span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <button
                  onClick={() => toggleCell(index)}
                  className="text-white/60 hover:text-white text-xs transition-colors duration-300"
                >
                  {expandedCells.has(index) ? 'Collapse' : 'Expand'}
                </button>
              </div>

              {/* Code content */}
              <div
                className={`transition-all duration-300 ${
                  expandedCells.has(index) ? 'max-h-none' : 'max-h-60 overflow-hidden'
                }`}
              >
                <SyntaxHighlighter
                  language="python"
                  style={oneDark}
                  customStyle={{
                    margin: 0,
                    borderRadius: 0,
                    background: 'transparent',
                  }}
                >
                  {cell.source.join('')}
                </SyntaxHighlighter>
              </div>

              {/* Outputs */}
              {cell.outputs && cell.outputs.length > 0 && (
                <div className="border-t border-zinc-600/30">
                  <div className="px-4 py-2 bg-zinc-700/20">
                    <span className="text-xs font-mono text-white/60">Output:</span>
                  </div>
                  <div className="p-4 space-y-4">
                    {cell.outputs.map((output, outputIndex) => (
                      <div key={outputIndex}>{renderOutput(output)}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
