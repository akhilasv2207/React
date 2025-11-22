import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeftIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/Checkbox";

export default function ConsentForm() {

    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className="flex flex-col flex-1 w-full overflow-y-auto lg:w-1/2 no-scrollbar">
            <div className="w-full max-w-md mx-auto mb-5 sm:pt-10">
                <Link
                    to="/"
                    className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                    <ChevronLeftIcon className="size-5" />
                    Back to dashboard
                </Link>
            </div>
            <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
                <div>

                    <div>

                        <div className="relative py-3 sm:py-5">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
                            </div>

                        </div>
                        <form>
                            <div className="space-y-5">
                                {/* Age */}
                                <div>
                                    <Label>
                                        Age<span className="text-error-500">*</span>
                                    </Label>
                                    <Input
                                        type="number"
                                        id="age"
                                        name="age"
                                        placeholder="Enter your age"
                                        min="0"
                                    />
                                </div>

                                {/* Location */}
                                <div>
                                    <Label>
                                        Location<span className="text-error-500">*</span>
                                    </Label>
                                    <Input
                                        type="text"
                                        id="location"
                                        name="location"
                                        placeholder="Enter your location"
                                    />
                                </div>

                                {/* Mobile Number */}
                                <div>
                                    <Label>
                                        Mobile Number<span className="text-error-500">*</span>
                                    </Label>
                                    <Input
                                        type="tel"
                                        id="mobile"
                                        name="mobile"
                                        placeholder="Enter your mobile number"
                                    />
                                </div>

                                {/* Blood Group Dropdown */}
                                <div>
                                    <Label>
                                        Blood Group<span className="text-error-500">*</span>
                                    </Label>
                                    <select
                                        id="bloodGroup"
                                        name="bloodGroup"
                                        className="w-full px-3 py-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <option value="">Select</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                    </select>
                                </div>

                                {/* Previous Health History - Textarea */}
                                <div>
                                    <Label>Previous Health History</Label>
                                    <textarea
                                        id="history"
                                        name="history"
                                        rows={3}
                                        placeholder="Enter previous health issues separated by commas (e.g., diabetes, hypertension)"
                                        className="w-full px-3 py-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                                    />
                                </div>

                                {/* Acknowledgement Checkbox */}
                                <div className="flex items-start gap-3">
                                    <Checkbox
                                        className="w-5 h-5 mt-1"
                                        checked={isChecked}
                                        onChange={setIsChecked}
                                    />
                                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                        I acknowledge that my medical information may be shared with authorized
                                        healthcare providers for diagnosis and treatment purposes, and I consent
                                        to the secure handling of my data under applicable privacy regulations.
                                    </p>
                                </div>

                                {/* Button */}
                                <div>
                                    <button className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className="mt-5">
                            <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                                Already have an account? {""}
                                <Link
                                    to="/signin"
                                    className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
