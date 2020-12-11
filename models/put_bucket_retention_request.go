// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2020 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// PutBucketRetentionRequest put bucket retention request
//
// swagger:model putBucketRetentionRequest
type PutBucketRetentionRequest struct {

	// mode
	// Required: true
	Mode ObjectRetentionMode `json:"mode"`

	// unit
	// Required: true
	Unit ObjectRetentionUnit `json:"unit"`

	// validity
	// Required: true
	Validity *int32 `json:"validity"`
}

// Validate validates this put bucket retention request
func (m *PutBucketRetentionRequest) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateMode(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateUnit(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateValidity(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *PutBucketRetentionRequest) validateMode(formats strfmt.Registry) error {

	if err := m.Mode.Validate(formats); err != nil {
		if ve, ok := err.(*errors.Validation); ok {
			return ve.ValidateName("mode")
		}
		return err
	}

	return nil
}

func (m *PutBucketRetentionRequest) validateUnit(formats strfmt.Registry) error {

	if err := m.Unit.Validate(formats); err != nil {
		if ve, ok := err.(*errors.Validation); ok {
			return ve.ValidateName("unit")
		}
		return err
	}

	return nil
}

func (m *PutBucketRetentionRequest) validateValidity(formats strfmt.Registry) error {

	if err := validate.Required("validity", "body", m.Validity); err != nil {
		return err
	}

	return nil
}

// MarshalBinary interface implementation
func (m *PutBucketRetentionRequest) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *PutBucketRetentionRequest) UnmarshalBinary(b []byte) error {
	var res PutBucketRetentionRequest
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}