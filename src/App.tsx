import { useState } from 'react';
import { CloseoutForm } from './components/CloseoutForm';
import type { CloseoutDetails } from './types/closeout';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CloseoutPDF } from './components/CloseoutPDF';
import { FileText, RefreshCw, CheckCircle, Download, ArrowRight, Building2, ClipboardList } from 'lucide-react';
import './App.css';

function App() {
  const [closeoutData, setCloseoutData] = useState<CloseoutDetails | null>(null);
  const [isDraftSaved, setIsDraftSaved] = useState(false);

  const handleSubmit = (data: CloseoutDetails) => {
    setCloseoutData(data);
    localStorage.setItem('closeoutDraft', JSON.stringify(data));
  };

  const handleSaveDraft = (data: CloseoutDetails) => {
    localStorage.setItem('closeoutDraft', JSON.stringify(data));
    setIsDraftSaved(true);
    setTimeout(() => setIsDraftSaved(false), 3000);
  };

  const handleStartNew = () => {
    if (window.confirm('Are you sure you want to start a new closeout? Any unsaved data will be lost.')) {
      setCloseoutData(null);
      localStorage.removeItem('closeoutDraft');
    }
  };

  const WelcomeScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-3 rounded-xl">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                BronxWorks Program Closeout Assistant
              </h1>
              <p className="text-gray-600 mt-1">Streamline your program closure process</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Draft Saved Notification */}
        {isDraftSaved && (
          <div className="mb-8 bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3 animate-in fade-in duration-300">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-800 font-medium">Draft saved successfully!</span>
          </div>
        )}

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <ClipboardList className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple. Guided. Complete.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Follow our step-by-step process to ensure nothing is missed during your program closeout. 
            Generate professional reports for IT and Operations in minutes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <FileText className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Guided Process</h3>
            <p className="text-gray-600 leading-relaxed">
              Our 6-step wizard walks you through every detail needed for a complete program closeout.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="bg-emerald-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <CheckCircle className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Auto-Save</h3>
            <p className="text-gray-600 leading-relaxed">
              Never lose your progress. Your work is automatically saved every 30 seconds.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Download className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Reports</h3>
            <p className="text-gray-600 leading-relaxed">
              Generate comprehensive PDF reports that IT and Operations can act on immediately.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">What You'll Need to Provide</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Program Details</h4>
                <p className="text-gray-600 text-sm">Basic information about your program, location, and timeline</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                <p className="text-gray-600 text-sm">Primary and backup contacts for coordination</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">IT Equipment</h4>
                <p className="text-gray-600 text-sm">Computers, printers, phones, and other technology</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Furniture</h4>
                <p className="text-gray-600 text-sm">Desks, chairs, and other furniture with disposition plans</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">User Accounts</h4>
                <p className="text-gray-600 text-sm">Microsoft 365 accounts and data backup requirements</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">6</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Timeline</h4>
                <p className="text-gray-600 text-sm">Key dates and any special requirements</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <CloseoutForm onSubmit={handleSubmit} onSaveDraft={handleSaveDraft} />
        </div>
      </main>
    </div>
  );

  const CompletionScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-600 p-3 rounded-xl">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Closeout Complete!</h1>
                <p className="text-gray-600 mt-1">Your report is ready for download</p>
              </div>
            </div>
            <button
              onClick={handleStartNew}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Start New Closeout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-12 text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-green-500 w-24 h-24 rounded-full mx-auto mb-8 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your Closeout Report is Ready!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We've generated a comprehensive PDF report containing all the information IT and Operations need 
            to efficiently handle your program closeout.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <PDFDownloadLink
              document={<CloseoutPDF data={closeoutData!} />}
              fileName={`${closeoutData!.programName.replace(/\s+/g, '_')}_Closeout_${new Date().toISOString().split('T')[0]}.pdf`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {({ loading }) => (
                <>
                  <Download className="w-5 h-5" />
                  {loading ? 'Generating PDF...' : 'Download PDF Report'}
                </>
              )}
            </PDFDownloadLink>
            
            <button
              onClick={handleStartNew}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all"
            >
              <RefreshCw className="w-5 h-5" />
              Create Another Closeout
            </button>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center justify-center gap-2">
              <ArrowRight className="w-5 h-5 text-blue-600" />
              Next Steps
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                <span className="text-gray-700">Download and review the PDF report</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                <span className="text-gray-700">Share with IT and Operations departments</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                <span className="text-gray-700">Coordinate pickup dates and logistics</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                <span className="text-gray-700">Monitor progress and provide updates</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  return closeoutData ? <CompletionScreen /> : <WelcomeScreen />;
}

export default App;
