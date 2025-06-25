import { useState } from 'react';
import { CloseoutForm } from './components/CloseoutForm';
import type { CloseoutDetails } from './types/closeout';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CloseoutPDF } from './components/CloseoutPDF';
import { FileText, RefreshCw, CheckCircle, Download, ArrowRight, Building2, ClipboardList, Clock } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-pink-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-3 rounded-xl shadow-lg">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                BronxWorks Program Closeout Assistant
              </h1>
              <p className="text-gray-600 mt-1 text-lg">Streamline your program closure process with confidence</p>
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

        {/* Instructions Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mb-12">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-teal-500 to-pink-500 w-24 h-24 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
              <ClipboardList className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Program Closeout Instructions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              This guided process will help you systematically document and coordinate all aspects of your program closure. 
              Our step-by-step wizard ensures nothing is overlooked and generates professional reports for seamless handoffs.
            </p>
          </div>

          {/* Process Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">15-20 Minutes</h3>
              <p className="text-gray-600">Estimated completion time depending on program complexity</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <FileText className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">6 Simple Steps</h3>
              <p className="text-gray-600">Comprehensive wizard covering all closeout requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Auto-Save</h3>
              <p className="text-gray-600">Your progress is automatically saved every 30 seconds</p>
            </div>
          </div>

          {/* Why This Process */}
          <div className="bg-gradient-to-r from-teal-50 to-pink-50 rounded-2xl p-8 border border-teal-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why This Process is Essential</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Compliance & Documentation</h4>
                  <p className="text-gray-600 text-sm">Ensures all regulatory and organizational requirements are met with proper documentation trails</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Asset Recovery</h4>
                  <p className="text-gray-600 text-sm">Maximizes recovery of valuable equipment, furniture, and digital assets for reuse across BronxWorks</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Data Security</h4>
                  <p className="text-gray-600 text-sm">Protects sensitive participant and organizational data through proper account deactivation and backup procedures</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cost Efficiency</h4>
                  <p className="text-gray-600 text-sm">Reduces operational overhead by coordinating logistics and minimizing last-minute emergency requests</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* What You'll Need */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">Information You'll Need to Gather</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Program Details</h4>
                <p className="text-gray-600 text-sm">Program name, location address, current participant count, and closure reason</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                <p className="text-gray-600 text-sm">Program manager, site coordinator, and backup contact details</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">IT Equipment Inventory</h4>
                <p className="text-gray-600 text-sm">Laptops, desktops, printers, phones, tablets, and networking equipment</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Furniture & Assets</h4>
                <p className="text-gray-600 text-sm">Office furniture, appliances, and their intended disposition (transfer, donate, dispose)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Digital Accounts</h4>
                <p className="text-gray-600 text-sm">Microsoft 365 user accounts, shared mailboxes, and data backup requirements</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">6</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Timeline & Logistics</h4>
                <p className="text-gray-600 text-sm">Target closure date, equipment pickup preferences, and any access restrictions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="text-center">
            <CloseoutForm onSubmit={handleSubmit} onSaveDraft={handleSaveDraft} />
            <p className="text-gray-500 text-sm mt-4 max-w-2xl mx-auto">
              Have questions about the closeout process? Contact the IT Operations team at 
              <a href="mailto:it-ops@bronxworks.org" className="text-teal-600 hover:text-teal-700 font-medium"> it-ops@bronxworks.org</a> or 
              call <span className="font-medium">(718) 588-1030 ext. 123</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );

  const CompletionScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-pink-50">
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-3 rounded-xl shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Closeout Complete!</h1>
                <p className="text-gray-600 mt-1 text-lg">Your comprehensive report is ready for download</p>
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
          <div className="bg-gradient-to-r from-teal-500 to-pink-500 w-24 h-24 rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Your Closeout Report is Ready!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We've generated a comprehensive, professional PDF report containing all the detailed information 
            our IT and Operations teams need to efficiently coordinate your program closeout.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <PDFDownloadLink
              document={<CloseoutPDF data={closeoutData!} />}
              fileName={`${closeoutData!.programName.replace(/\s+/g, '_')}_Closeout_${new Date().toISOString().split('T')[0]}.pdf`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-pink-500 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
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

          <div className="bg-gradient-to-r from-teal-50 to-pink-50 rounded-2xl p-8 border border-teal-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-2">
              <ArrowRight className="w-6 h-6 text-teal-600" />
              Next Steps
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Download & Review</h4>
                  <p className="text-gray-600 text-sm">Carefully review the PDF report for accuracy and completeness</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Share with Teams</h4>
                  <p className="text-gray-600 text-sm">Distribute to IT Operations and Administrative teams</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Coordinate Logistics</h4>
                  <p className="text-gray-600 text-sm">Schedule equipment pickup and coordinate access requirements</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Monitor Progress</h4>
                  <p className="text-gray-600 text-sm">Track completion status and provide updates as needed</p>
                </div>
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
