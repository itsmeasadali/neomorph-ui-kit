'use client';

import React, { useState } from 'react';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Input from '@/components/Input';
import Tab from '@/components/Tab';
import Accordion from '@/components/Accordion';
import Breadcrumb from '@/components/Breadcrumb';
import Dropdown from '@/components/Dropdown';
import Modal from '@/components/Modal';
import Pagination from '@/components/Pagination';
import ProgressBar from '@/components/ProgressBar';
import Alert from '@/components/Alert';
import Avatar from '@/components/Avatar';
import SkeletonLoader from '@/components/SkeletonLoader';
import ToggleSwitch from '@/components/ToggleSwitch';
import Tooltip from '@/components/Tooltip';
import Badge from '@/components/Badge';
import Tag from '@/components/Tag';
import Checkbox from '@/components/Checkbox';
import RadioButton from '@/components/RadioButton';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState('');

  const handleClick = () => console.log('Clicked');
  const handlePageChange = (page: number) => setCurrentPage(page);
  const handleToggle = () => setIsChecked(!isChecked);
  const handleRadioChange = (value: string) => setSelectedRadio(value);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">UI Components</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="flex space-x-2">
          <Button onClick={handleClick}>Default Button</Button>
          <Button variant="cyan">Cyan Button</Button>
          <Button variant="blue">Blue Button</Button>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="Card 1" description="This is a sample card" />
          <Card title="Card 2" description="Another sample card" imageUrl="https://via.placeholder.com/300" />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Input</h2>
        <Input placeholder="Enter text here" label="Sample Input" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tabs</h2>
        <Tab tabs={[
          { label: 'Tab 1', content: <p>Content for Tab 1</p> },
          { label: 'Tab 2', content: <p>Content for Tab 2</p> },
        ]} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Accordion</h2>
        <Accordion items={[
          { title: 'Section 1', content: 'Content for Section 1' },
          { title: 'Section 2', content: 'Content for Section 2' },
        ]} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Breadcrumb</h2>
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Components', href: '/components' },
        ]} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dropdown</h2>
        <Dropdown options={['Option 1', 'Option 2', 'Option 3']} onSelect={(option) => console.log(option)} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Modal</h2>
        <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Sample Modal">
          <p>This is the content of the modal.</p>
        </Modal>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pagination</h2>
        <Pagination currentPage={currentPage} totalPages={5} onPageChange={handlePageChange} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Progress Bar</h2>
        <ProgressBar progress={50} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Alert</h2>
        <Alert type="success" message="This is a success alert!" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Avatar</h2>
        <Avatar src="https://via.placeholder.com/150" alt="User Avatar" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skeleton Loader</h2>
        <SkeletonLoader width="200px" height="20px" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Toggle Switch</h2>
        <ToggleSwitch label="Toggle me" onChange={handleToggle} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tooltip</h2>
        <Tooltip text="This is a tooltip">
          <span className="underline cursor-help">Hover me</span>
        </Tooltip>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Badge</h2>
        <Badge text="New" color="red" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tag</h2>
        <Tag text="Sample Tag" onRemove={() => console.log('Tag removed')} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Checkbox</h2>
        <Checkbox label="Check me" checked={isChecked} onChange={handleToggle} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Radio Button</h2>
        <RadioButton label="Option 1" name="sample" value="option1" checked={selectedRadio === 'option1'} onChange={handleRadioChange} />
        <RadioButton label="Option 2" name="sample" value="option2" checked={selectedRadio === 'option2'} onChange={handleRadioChange} />
      </section>
    </div>
  );
}