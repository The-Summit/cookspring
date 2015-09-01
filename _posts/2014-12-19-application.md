---
layout: default
permalink: application.html
---
<form role="form" class="col-md-6 col-md-offset-3" id="application">
	<h3><span class="text-red">Cook</span><span class="text-yellow">Spring</span> Application</h3>
	<h4>Applicant Information</h4>
	<div class="row">
		<div class="form-group col-md-6">
			<label for="fname">First Name</label>
			<input type="text" class="form-control" id="fname" name="fname" placeholder="Enter first name">
		</div>
		<div class="form-group col-md-6">
			<label for="lname">Last Name</label>
			<input type="text" class="form-control" id="lname" name="lname" placeholder="Enter last name">
		</div>	
	</div>
	<div class="row">		
		<div class="form-group col-md-9">
			<label for="address">Address</label>
			<input type="text" class="form-control" id="address" name="address" placeholder="Enter address">
		</div>
		<div class="form-group col-md-3">
			<label for="zip">ZIP</label>
			<input type="number" class="form-control" id="zip" name="zip" placeholder="Enter ZIP">
		</div>		
	</div>
	<div class="row">		
		<div class="form-group col-md-12">
			<label for="email">Email address</label>
			<input type="email" class="form-control" id="email" name="email" placeholder="Enter email">
		</div>
	</div>
	<div class="row">
		<div class="form-group col-md-6">
			<label for="phone">Phone Number</label>
			<input type="tel" class="form-control" id="phone" name="phone" placeholder="Enter telephone">
		</div>
		<div class="form-group col-md-6">
			<label for="membership">Membership Type <a href="http://cookspringfw.com/#memberships" class="question" target="_blank">?</a></label>
			<select class="form-control" id="membership" name="membership">
				<option></option>
				<option>Hourly</option>
				<option>Shared - 20 hours</option>
				<option>Shared - 40 hours</option>
				<option>Exclusive - 40 hours</option>
			</select>
		</div>		
	</div>
	<hr>
	<h4>Business Information</h4>
	<div class="row">
		<div class="form-group col-md-6">
			<label for="ownerFname">Owner's First Name (if different)</label>
			<input type="text" class="form-control" id="ownerFname" name="ownerFname" placeholder="Enter owner's first name">
		</div>
		<div class="form-group col-md-6">
			<label for="ownerLname">Owner's Last Name (if different)</label>
			<input type="text" class="form-control" id="ownerLname" name="ownerLname" placeholder="Enter owner's last name">
		</div>	
	</div>	
	<div class="row">		
		<div class="form-group col-md-6">
			<label for="bizName">Business Name</label>
			<input type="text" class="form-control" id="bizName" name="bizName" placeholder="Enter business name">
		</div>
		<div class="form-group col-md-6">
			<label for="bizType">Business Type</label>
			<select class="form-control" id="businessType" name="businessType">
				<option></option>
				<option>Sole Proprietorship</option>
				<option>Partnership</option>
				<option>Corporation</option>
				<option>Other</option>
			</select>
		</div>		
	</div>
	<div class="row">
		<div class="form-group col-md-12">
			<label for="bizPlan">Please provide a short summary of your business plan. Please include the following information:
				<ul>
					<li>The concept for your business (1 paragraph)</li>
					<li>Description of your product (1 paragraph)</li>
				</ul>
			</label>
			<textarea class="form-control" id="bizPlan" name="bizPlan" placeholder="Enter your business summary"></textarea>
		</div>
	</div>
	<button class="btn btn-primary">Submit</button>
</form>					