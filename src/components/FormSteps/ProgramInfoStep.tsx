import { useFormContext } from 'react-hook-form';
import type { CloseoutDetails } from '../../types/closeout';
import { Building, MapPin, Calendar, Users as UsersIcon, Info } from 'lucide-react';

export function ProgramInfoStep() {
  const { register, formState: { errors } } = useFormContext<CloseoutDetails>();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="bg-blue-100 w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center">
          <Building className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Program Information</h2>
        <p className="text-gray-600">Let's start with the basic details about your program</p>
      </div>

      {/* Program Details Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <Info className="w-5 h-5 text-blue-600" />
          Program Details
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-900">
              Program Name *
            </label>
            <input
              {...register('programName', { required: 'Program name is required' })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors bg-white"
              placeholder="e.g., Early Childhood Education Center"
            />
            {errors.programName && (
              <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                {errors.programName.message}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-900">
              Program Type *
            </label>
            <input
              {...register('programType', { required: 'Program type is required' })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors bg-white"
              placeholder="e.g., Education, Social Services, Youth Development"
            />
            {errors.programType && (
              <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                {errors.programType.message}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-900 flex items-center gap-2">
              <UsersIcon className="w-4 h-4 text-blue-600" />
              Total Staff Count *
            </label>
            <input
              type="number"
              {...register('totalStaff', { 
                required: 'Staff count is required',
                min: { value: 1, message: 'Must have at least 1 staff member' }
              })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors bg-white"
              placeholder="10"
              min="1"
            />
            {errors.totalStaff && (
              <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                {errors.totalStaff.message}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-amber-600" />
          Important Dates
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-900">
              Last Operational Date *
            </label>
            <p className="text-xs text-gray-600 mb-2">When will the program stop serving clients?</p>
            <input
              type="date"
              {...register('lastOperationalDate', { required: 'Last operational date is required' })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-0 transition-colors bg-white"
            />
            {errors.lastOperationalDate && (
              <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                {errors.lastOperationalDate.message}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-900">
              Target Closeout Date *
            </label>
            <p className="text-xs text-gray-600 mb-2">When should everything be completely closed?</p>
            <input
              type="date"
              {...register('closeoutDate', { required: 'Closeout date is required' })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-0 transition-colors bg-white"
            />
            {errors.closeoutDate && (
              <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                {errors.closeoutDate.message}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-emerald-600" />
          Location Details
        </h3>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Building Name *
              </label>
              <input
                {...register('location.building', { required: 'Building name is required' })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors bg-white"
                placeholder="e.g., Main Building, Community Center"
              />
              {errors.location?.building && (
                <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                  <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                  {errors.location.building.message}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Floor (Optional)
              </label>
              <input
                {...register('location.floor')}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors bg-white"
                placeholder="e.g., 3rd Floor, Ground Level"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-900">
              Full Address *
            </label>
            <p className="text-xs text-gray-600 mb-2">Complete address for pickup coordination</p>
            <textarea
              {...register('location.address', { required: 'Address is required' })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors bg-white resize-none"
              rows={3}
              placeholder="123 Main Street, Bronx, NY 10001"
            />
            {errors.location?.address && (
              <div className="flex items-center gap-2 text-red-600 text-sm mt-1">
                <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                {errors.location.address.message}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Help Text */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="text-sm text-blue-800 flex items-start gap-2">
          <Info className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
          <span>
            <strong>Tip:</strong> Having accurate dates and location details helps IT and Operations plan the most efficient closeout process. 
            If you're unsure about exact dates, provide your best estimate.
          </span>
        </p>
      </div>
    </div>
  );
}