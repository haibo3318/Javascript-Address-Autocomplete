<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key={your-api-key}&libraries=places"></script>

<div class="inputWrap">
  <input type="text" id="address" name="Address" value="{{ old('Address') }}"  placeholder="Enter your address:"/>
  <input type="hidden" id="street_number" name="Street_Number" value="{{ old('Street_Number') }}" />
  <input type="hidden" id="route" name="Street" value="{{ old('Street') }}" />
  <input type="hidden" id="sublocality_level_1" name="Suburb" value="{{ old('Suburb') }}" />
  <input type="hidden" id="locality" name="City" value="{{ old('City') }}" />
  <input type="hidden" id="administrative_area_level_1" name="Region" value="{{ old('Region') }}" />
  <input type="hidden" id="postal_code" min="1" max="9999" name="Postal_Code" maxlength="4" value="{{ old('Postal_Code') }}" />
  <input type="hidden" id="country" name="Country" value="{{ old('Country') }}" />
</div>
